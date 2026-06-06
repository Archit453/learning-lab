# Topic Template

This is the canonical Learning Lab investigation blueprint.

Use this when writing or revising topic content.

## Investigation Flow

```text
Question
->
Problem
->
Constraint
->
Solution
->
Tradeoff
->
Mental Model
->
Key Takeaway
->
Next Investigation
```

Not every topic needs every section as a visible heading, but every strong investigation should consider each step.

## Question

Purpose: create curiosity and define the investigation.

When to use: almost always. If omitted, the title must already work as the question.

Example:

```text
Why does JavaScript need an event loop?
```

## Problem

Purpose: explain what difficulty exists before the concept appears.

When to use: use whenever the reader needs a reason to care about the concept.

Example:

```text
JavaScript runs on a single main thread, but real programs still need to wait for timers, network requests, and user events without freezing the page.
```

## Constraint

Purpose: show the limitation that shaped the solution.

When to use: use when the concept makes more sense after naming the pressure or limitation behind it.

Example:

```text
The browser cannot let long-running JavaScript block rendering and input forever.
```

## Solution

Purpose: explain the mechanism that addresses the problem under the constraint.

When to use: always. Every investigation needs a clear explanation of the solution.

Example:

```text
The event loop repeatedly checks whether the call stack is empty, then moves queued work into execution when JavaScript is ready to run it.
```

## Tradeoff

Purpose: explain what the solution makes easier and what it makes harder.

When to use: use when the concept has costs, edge cases, or misleading simplicity.

Example:

```text
The event loop keeps the page responsive, but it also means execution order can be less obvious than synchronous code.
```

## Mental Model

Purpose: give the reader a reusable way to think about the concept.

When to use: always. If there is no mental model, the topic probably needs more refinement.

Example:

```text
Think of the event loop as the scheduler that waits for the current JavaScript work to finish before letting the next queued task enter the call stack.
```

## Key Takeaway

Purpose: compress the investigation into one memorable idea.

When to use: use at the end of most investigations, especially when the topic introduced several moving parts.

Example:

```text
Asynchronous JavaScript does not run many pieces of JavaScript at once; it coordinates when waiting work gets a turn.
```

## Next Investigation

Purpose: guide the reader toward the next useful question.

When to use: use when there is a clear follow-up topic or dependency.

Example:

```text
Next, investigate how promises use the microtask queue to run before regular queued tasks.
```

## Good Learning Lab Content Patterns

Good Learning Lab content:

- Starts from a real question.
- Names the problem before naming the tool.
- Uses constraints to explain why the solution looks the way it does.
- Shows small examples only when they clarify the mental model.
- States tradeoffs directly.
- Ends with a reusable way to reason.

Compact example:

```text
Question: Why do closures exist?
Problem: A function sometimes needs to remember values after the outer function has finished.
Constraint: Local variables usually disappear when their function call is done.
Solution: JavaScript keeps the referenced variables alive with the returned inner function.
Tradeoff: This enables private state, but can also keep memory alive longer than expected.
Mental Model: A closure is a function carrying the variables it still needs from where it was created.
```

## Content Patterns To Avoid

Avoid:

- Starting with a dictionary definition.
- Teaching syntax before motivation.
- Treating every topic like a tutorial.
- Copying documentation structure.
- Adding long examples without explaining why they matter.
- Hiding tradeoffs to make a concept seem simpler.
- Publishing a topic that has no mental model.
