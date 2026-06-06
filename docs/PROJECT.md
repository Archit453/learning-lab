# Learning Lab Project

Learning Lab is a content-first learning system for building deep technical understanding.

If starting a new Codex or ChatGPT session, read this file first.

## First Read For New AI Sessions

1. Read `PROJECT.md`.
2. Read `CONTENT_WORKFLOW.md` when modifying content structure.
3. Read `TOPIC_TEMPLATE.md` when creating investigations.
4. Do not modify architecture without approval.

## Project Vision

Learning Lab is not a tutorial site, documentation clone, or course platform.

Tutorials usually teach steps. Documentation explains APIs and tool behavior. Course platforms often organize around completion.

Learning Lab teaches by investigation:

```text
Question -> Problem -> Constraint -> Solution -> Tradeoff -> Mental Model
```

The goal is to help readers understand why concepts exist, what problems they solve, what constraints shaped them, and how to reason with them later.

## Project Principles

1. Content-first.
2. Architecture second.
3. Avoid over-engineering.
4. Prefer simple workflows.
5. Optimize for years of content creation.
6. Every feature must reduce friction for publishing knowledge.

## Current Architecture

Learning Lab is organized as:

```text
Subject -> Topics -> Investigations
```

Subjects are broad learning areas such as JavaScript, TypeScript, React, Backend, DevOps, Security, or AI.

Topics are focused concepts inside a subject, such as closures, scope, loops, or the event loop.

Investigations are the actual learning pages. Each investigation should explain one concept through the Learning Lab teaching framework.

Subject pages list topics for a subject. Topic pages contain investigation content.

## Folder Structure Overview

```text
src/content/subjects
src/content/topics
src/content/topic-orders
```

`src/content/subjects` stores subject metadata such as title, slug, and description.

`src/content/topics` stores topic markdown files grouped by subject.

`src/content/topic-orders` stores the ordered topic list for each subject. This order should drive subject topic lists and previous / next navigation.

Do not store full topic content in subject files or topic order files.

## Current Project State

Update this section as the project evolves.

```text
Homepage: Complete
Content Architecture: Complete
Investigation Map: Planned
Topic Generator: Planned
Subject Generator: Planned
Diagram Workflow: Planned
Excalidraw Integration: Planned
Reusable Content Blocks: Planned
Content Creation: Not Started
```

Use simple status labels:

- Complete
- In Progress
- Planned
- Not Started
- Deferred

## Session Recovery Guide

Learning Lab is an Astro project with a content-first architecture.

Future sessions should assume:

- This `docs/` folder is the source of truth.
- Project overview and recovery context belongs in `PROJECT.md`.
- Day-to-day content operations belong in `CONTENT_WORKFLOW.md`.
- Investigation writing guidance belongs in `TOPIC_TEMPLATE.md`.
- Topic content belongs in `src/content/topics`.
- Subject metadata belongs in `src/content/subjects`.
- Topic order belongs in `src/content/topic-orders`.
- Planned features should not be treated as implemented.

Do not modify the homepage, routing, content collections, subject architecture, or topic architecture unless the user explicitly asks for that work.
