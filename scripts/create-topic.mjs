import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rename, rm, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const contentRoot = path.join(projectRoot, "src", "content");
const [, , subjectArg, ...titleParts] = process.argv;

function fail(message) {
	console.error(`Error: ${message}`);
	console.error("No files were modified.");
	process.exit(1);
}

function toProjectPath(filePath) {
	return path.relative(projectRoot, filePath).replaceAll(path.sep, "/");
}

function normalizeTitle(parts) {
	return parts.join(" ").trim().replace(/\s+/g, " ");
}

function toGeneratedTitle(title) {
	return title
		.split(" ")
		.map((word) => {
			if (word === word.toLowerCase()) {
				return word.charAt(0).toUpperCase() + word.slice(1);
			}

			return word;
		})
		.join(" ");
}

function generateSlug(title) {
	return title
		.trim()
		.toLowerCase()
		.replace(/['"]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
}

function escapeYamlString(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function createTopicMarkdown({ title, slug, subject }) {
	const safeTitle = escapeYamlString(title);
	const safeSlug = escapeYamlString(slug);
	const safeSubject = escapeYamlString(subject);

	return `---
title: "${safeTitle}"
slug: "${safeSlug}"
subject: "${safeSubject}"
description: "Draft investigation for ${safeTitle}."
status: "draft"
---

## Question

Why does this concept exist?

## Problem

## Constraint

## Solution

## Tradeoff

## Mental Model

## Key Takeaway

## Next Investigation
`;
}

async function readJson(filePath, label) {
	let raw;

	try {
		raw = await readFile(filePath, "utf8");
	} catch {
		fail(`${label} could not be read: ${toProjectPath(filePath)}`);
	}

	try {
		return JSON.parse(raw);
	} catch {
		fail(`${label} is malformed JSON: ${toProjectPath(filePath)}`);
	}
}

function extractFrontmatterSlug(markdown) {
	const frontmatterMatch = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);

	if (!frontmatterMatch) {
		return null;
	}

	const slugMatch = frontmatterMatch[1].match(/^slug:\s*["']?([^"'\r\n]+)["']?\s*$/m);
	return slugMatch?.[1]?.trim() ?? null;
}

async function topicSlugExistsInFrontmatter(topicFolder, slug) {
	const entries = await readdir(topicFolder, { withFileTypes: true });

	for (const entry of entries) {
		if (!entry.isFile() || !entry.name.endsWith(".md")) {
			continue;
		}

		const topicPath = path.join(topicFolder, entry.name);
		const markdown = await readFile(topicPath, "utf8");
		const existingSlug = extractFrontmatterSlug(markdown);

		if (existingSlug === slug) {
			return topicPath;
		}
	}

	return null;
}

async function main() {
	const subject = subjectArg?.trim();
	const rawTitle = normalizeTitle(titleParts);

	if (!subject) {
		fail("Subject is required. Usage: npm run create-topic -- <subject> \"<topic title>\"");
	}

	if (!rawTitle) {
		fail("Topic title is required. Usage: npm run create-topic -- <subject> \"<topic title>\"");
	}

	const title = toGeneratedTitle(rawTitle);
	const slug = generateSlug(rawTitle);

	if (!slug) {
		fail(`Generated slug is empty for topic title: "${rawTitle}"`);
	}

	const subjectPath = path.join(contentRoot, "subjects", `${subject}.json`);
	const topicFolder = path.join(contentRoot, "topics", subject);
	const topicOrderPath = path.join(contentRoot, "topic-orders", `${subject}.json`);
	const topicPath = path.join(topicFolder, `${slug}.md`);

	if (!existsSync(subjectPath)) {
		fail(`Unknown subject. Missing ${toProjectPath(subjectPath)}`);
	}

	if (!existsSync(topicFolder)) {
		fail(`Topic folder is missing: ${toProjectPath(topicFolder)}`);
	}

	if (!existsSync(topicOrderPath)) {
		fail(`Topic order file is missing: ${toProjectPath(topicOrderPath)}`);
	}

	if (existsSync(topicPath)) {
		fail(`Duplicate topic file already exists: ${toProjectPath(topicPath)}`);
	}

	const subjectData = await readJson(subjectPath, "Subject JSON");

	if (subjectData.slug !== subject) {
		fail(`Subject JSON slug must match "${subject}" in ${toProjectPath(subjectPath)}`);
	}

	const topicOrder = await readJson(topicOrderPath, "Topic order JSON");

	if (topicOrder.subject !== subject) {
		fail(`Topic order subject must match "${subject}" in ${toProjectPath(topicOrderPath)}`);
	}

	if (!Array.isArray(topicOrder.topics)) {
		fail(`Topic order JSON must contain a topics array: ${toProjectPath(topicOrderPath)}`);
	}

	if (topicOrder.topics.includes(slug)) {
		fail(`Duplicate slug already exists in topic order: ${slug}`);
	}

	const duplicateFrontmatterPath = await topicSlugExistsInFrontmatter(topicFolder, slug);

	if (duplicateFrontmatterPath) {
		fail(`Duplicate frontmatter slug already exists in ${toProjectPath(duplicateFrontmatterPath)}: ${slug}`);
	}

	const topicMarkdown = createTopicMarkdown({ title, slug, subject });
	const updatedTopicOrder = {
		...topicOrder,
		topics: [...topicOrder.topics, slug],
	};
	const updatedTopicOrderJson = `${JSON.stringify(updatedTopicOrder, null, "\t")}\n`;
	const tempDir = path.join(projectRoot, `.tmp-create-topic-${process.pid}-${Date.now()}`);
	const tempTopicPath = path.join(tempDir, `${subject}-${slug}.md`);
	const tempOrderPath = path.join(tempDir, `${subject}-${slug}.json`);
	let topicMoved = false;

	try {
		await mkdir(tempDir, { recursive: true });
		await writeFile(tempTopicPath, topicMarkdown, { flag: "wx" });
		await writeFile(tempOrderPath, updatedTopicOrderJson, { flag: "wx" });
		await rename(tempTopicPath, topicPath);
		topicMoved = true;
		await rename(tempOrderPath, topicOrderPath);
		await rm(tempDir, { recursive: true, force: true }).catch(() => {});
	} catch (error) {
		if (topicMoved) {
			await unlink(topicPath).catch(() => {});
		}

		await unlink(tempTopicPath).catch(() => {});
		await unlink(tempOrderPath).catch(() => {});
		await rm(tempDir, { recursive: true, force: true }).catch(() => {});
		fail(error instanceof Error ? error.message : "Topic creation failed.");
	}

	console.log("✓ Subject validated");
	console.log("✓ Topic infrastructure validated");
	console.log(`✓ Slug generated: ${slug}`);
	console.log("");
	console.log("Created:");
	console.log(toProjectPath(topicPath));
	console.log("");
	console.log("Updated:");
	console.log(toProjectPath(topicOrderPath));
	console.log("");
	console.log("Topic created successfully.");
}

main();
