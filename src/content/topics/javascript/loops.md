---
title: "Loops"
slug: "loops"
subject: "javascript"
subtitle: "How do we repeat work without rewriting the same instruction?"
description: "An investigation into repetition, control flow, and the cost of duplicated instructions."
status: "published"
---
# Quick Recap

In the previous lesson, we learned how JavaScript makes decisions using operators.

Using comparison operators:

```js
10 > 5 // true
```

and logical operators:

```js
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);
```

JavaScript could answer questions and make decisions.

But making decisions is only part of programming.

Sometimes we want JavaScript to repeat the same action again and again.

That's where loops come in.

---

# Loops

## Why Do Loops Exist?

Imagine I ask JavaScript to print:

```txt
Hello
Hello
Hello
Hello
Hello
```

One way would be:

```js
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

This works.

But what if I wanted 100 prints?

Or 1,000?

Writing the same code repeatedly would be painful.

The real problem is:

> How can we tell JavaScript to repeat an action automatically?

The answer is a loop.

A loop is simply a way to execute the same block of code multiple times.

---

## Think About It

When climbing stairs, you don't think:

```txt
Step 1
Step 2
Step 3
Step 4
Step 5
```

Instead your brain follows a simple rule:

```txt
Keep taking steps
Until you reach the top
```

That's exactly how loops work.

---

# The for Loop

## When Should You Use It?

Use a `for` loop when you know how many times something should happen.

Examples:

* Print numbers from 1 to 10
* Show 50 products
* Process 100 records

---

## Structure

```js
for (initialization; condition; update) {
  // code
}
```

At first glance this looks strange.

Let's break it into pieces.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## Part 1: Initialization

```js
let i = 1
```

This creates our counter.

Think:

> Start counting from 1.

This runs only once.

---

## Part 2: Condition

```js
i <= 5
```

Before every repetition JavaScript asks:

> Should I continue?

If the answer is true, the loop runs.

If the answer is false, the loop stops.

---

## Part 3: Update

```js
i++
```

After every repetition:

```txt
Increase i by 1
```

This moves the loop forward.

---

## Visualizing Execution

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

### First Cycle

```txt
i = 1

1 <= 3 ? true

Print 1

i becomes 2
```

### Second Cycle

```txt
2 <= 3 ? true

Print 2

i becomes 3
```

### Third Cycle

```txt
3 <= 3 ? true

Print 3

i becomes 4
```

### Final Check

```txt
4 <= 3 ? false

Stop
```

Output:

```txt
1
2
3
```

---

## Common Patterns

### Counting Forward

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

---

### Counting Backward

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

---

### Skipping Values

```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
```

Output:

```txt
0
2
4
6
8
10
```

---

# The while Loop

## Why Another Loop?

Sometimes we don't know how many times something should happen.

We only know a condition.

For example:

```txt
Keep asking for password
Until user enters the correct one
```

or

```txt
Keep downloading data
Until the server responds
```

In these situations a `for` loop doesn't feel natural.

A `while` loop does.

---

## Structure

```js
while (condition) {
  // code
}
```

Read it as:

> Keep doing this while the condition is true.

---

## Example

```js
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

Output:

```txt
1
2
3
4
5
```

---

## How It Thinks

```txt
Check condition
↓
Run code
↓
Update variable
↓
Check condition again
↓
Repeat
```

---

## The Biggest Mistake

Consider this:

```js
let count = 1;

while (count <= 5) {
  console.log(count);
}
```

What happens?

The condition never changes.

```txt
1 <= 5 → true
1 <= 5 → true
1 <= 5 → true
```

Forever.

This is called an **Infinite Loop**.

Always make sure something inside the loop changes the condition.

---

# The do...while Loop

The `do...while` loop solves one specific problem.

Sometimes we want code to run at least once.

Even if the condition is false.

---

## Structure

```js
do {
  // code
} while (condition);
```

Notice something important.

The condition is checked after the code runs.

---

## Example

```js
let number = 1;

do {
  console.log(number);
  number++;
} while (number <= 3);
```

Output:

```txt
1
2
3
```

---

## Real World Example

Imagine a login screen.

You must show the login form before checking whether the user entered correct information.

```txt
Show login form
↓
User enters details
↓
Check details
↓
If wrong, show again
```

This is exactly the type of problem `do...while` was designed for.

---

# Which Loop Should You Use?

| Situation                          | Best Choice |
| ---------------------------------- | ----------- |
| You know the number of repetitions | for         |
| You only know the condition        | while       |
| Code must run at least once        | do...while  |

---

# Challenge

Predict the output before running it.

```js
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

Take a moment and think through each iteration.

---

# Key Takeaways

* Loops allow us to repeat code efficiently.
* A `for` loop is ideal when the number of repetitions is known.
* A `while` loop is ideal when repetition depends on a condition.
* A `do...while` loop guarantees at least one execution.
* Infinite loops happen when the condition never becomes false.

---

# One Question Before We Move On

Every day we receive numbers from somewhere:

OTP Codes
Bank Balances
Instagram Likes
Product Prices
Ratings

But have you ever wondered:

How are OTPs generated?

Does a computer simply pick a random number?

Or is there something more happening behind the scenes?
