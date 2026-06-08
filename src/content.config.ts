import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const subjects = defineCollection({
	loader: glob({ base: "./src/content/subjects", pattern: "**/*.json" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		status: z.enum(["active", "future"]),
	}),
});

const topics = defineCollection({
	loader: glob({ base: "./src/content/topics", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		subject: z.string(),
		subtitle: z.string().optional(),
		description: z.string(),
		status: z.enum(["draft", "published"]),
		modes: z
			.object({
				notes: z
					.object({
						src: z.string(),
						alt: z.string(),
					})
					.optional(),
			})
			.optional(),
	}),
});

const topicOrders = defineCollection({
	loader: glob({ base: "./src/content/topic-orders", pattern: "**/*.json" }),
	schema: z.object({
		subject: z.string(),
		topics: z.array(z.string()),
	}),
});

export const collections = {
	subjects,
	topics,
	topicOrders,
};
