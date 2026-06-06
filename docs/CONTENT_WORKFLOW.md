# Content Workflow

This is the operational guide for managing Learning Lab content.

For project context, read `PROJECT.md`. For writing investigations, read `TOPIC_TEMPLATE.md`.

## Core Locations

```text
src/content/subjects
src/content/topics
src/content/topic-orders
```

Use `src/content/subjects` for subject metadata.

Use `src/content/topics` for topic markdown files grouped by subject.

Use `src/content/topic-orders` for the order of topics inside each subject.

## Add Topic

1. Create a markdown file in the subject folder.
2. Add the topic metadata and investigation content.
3. Add the topic slug to the subject order file.

Example:

```text
src/content/topics/javascript/prototypes.md
src/content/topic-orders/javascript.json
```

Order example:

```json
[
  "why-javascript-exists",
  "data-types",
  "operators",
  "functions",
  "scope",
  "closures",
  "prototypes",
  "loops",
  "event-loop"
]
```

## Rename Topic

Be clear about what is changing:

- Title change: changes visible text only.
- Slug change: changes the topic identity and may change the URL.
- File rename: usually means the slug is changing too.

If the slug changes, update:

- Topic file name
- Topic frontmatter slug, if present
- Matching entry in `src/content/topic-orders`
- Any links that point to the old slug

## Change Title

Changing a title should not change the URL.

Example:

```md
---
title: "Closures"
---
```

Can become:

```md
---
title: "How Closures Remember State"
---
```

The file can remain:

```text
src/content/topics/javascript/closures.md
```

## Change Slug

Changing a slug is a structural content change. Do it deliberately because existing links may break.

Example:

```text
src/content/topics/javascript/closures.md
```

Becomes:

```text
src/content/topics/javascript/how-closures-work.md
```

Then update:

```text
src/content/topic-orders/javascript.json
```

Example order update:

```json
[
  "scope",
  "how-closures-work",
  "loops"
]
```

## Reorder Topics

To reorder topics, edit only the matching topic order file.

Example:

```text
src/content/topic-orders/javascript.json
```

Move the topic slug to the desired position.

Do not edit topic markdown files just to change order.

## Add Subject

To add a subject:

1. Add a subject metadata file.
2. Add a subject topic folder.
3. Add a subject topic order file.

Example:

```text
src/content/subjects/react.json
src/content/topics/react/
src/content/topic-orders/react.json
```

The subject slug, topic folder name, and topic order file name should match.

## Topic Grouping

Group topics by subject.

Use this pattern:

```text
src/content/topics/{subject-slug}/{topic-slug}.md
```

Example:

```text
src/content/topics/javascript/event-loop.md
```

Do not create cross-subject topic folders unless the architecture is explicitly changed.

## Navigation Rules

Homepage:

- Broad entry point into Learning Lab.
- Should guide readers into subjects.
- Do not modify unless explicitly requested.

Subject pages:

- Show subject metadata and ordered topic lists.
- Should get topic order from `src/content/topic-orders`.

Topic pages:

- Contain investigation content.
- Should support orientation through breadcrumbs and adjacent-topic navigation.

Breadcrumbs:

```text
Home -> Subject -> Topic
```

Previous / next navigation:

- Should be derived from topic order files.
- Should not be hardcoded in topic content.

Investigation Map:

- Planned, not implemented.
- Should eventually show conceptual relationships between topics.

## CLI Commands

Current:

```bash
npm run dev
npm run build
npm run preview
```

Planned:

```bash
npm run create-topic
npm run create-subject
```

Do not assume planned commands exist until they are implemented.

## Change Guardrails

Safe changes:

- Add topics.
- Add subjects.
- Update content.
- Add diagrams.
- Reorder topics.
- Improve styling within existing patterns.

Require explicit approval:

- Routing changes.
- Content collection schema changes.
- URL structure changes.
- Navigation architecture changes.
- Homepage redesigns.
- Folder structure changes.
