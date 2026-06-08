---
title: "Operators"
slug: "operators"
subject: "javascript"
subtitle: "How does a language describe work between values?"
description: "An investigation into the symbols JavaScript uses to combine, compare, and transform values."
status: "published"

modes:
  notes:
    src: "/notes/javascript/Operator.svg"
    alt: "Handwritten revision notes for JavaScript operators"
---

## Data Type Revision

Before moving forward, let's quickly revisit what we learned in the previous lesson.

Every value in JavaScript belongs to one of two families:

* Primitives
* Objects

This distinction affects how values are stored, copied, compared, and manipulated.

---

## What Are Operators?

Now that JavaScript can store values, we need a way to work with them.

Operators are special symbols or keywords that perform actions on values.

```js
let result = 5 + 10;
```

In this expression:

* `+` is the operator
* `5` and `10` are operands
* The expression evaluates to `15`

Without operators, JavaScript could store data but could not do anything useful with it.

---

## Types of Operators

JavaScript provides different categories of operators.

### Assignment Operators

Used to assign values to variables.

```js
let score = 100;
```

Common shorthand assignment operators:

```js
let level = 10;

level += 5;
level *= 2;
```

---

### Arithmetic Operators

Used for mathematical calculations.

```js
+
-
*
/
%
**
```

Example:

```js
console.log(11 % 2); // 1
console.log(10 % 2); // 0
```

The remainder operator (`%`) is commonly used to determine whether a number is even or odd.

---

### Comparison Operators

Comparison operators compare values and always return a boolean.

```js
10 > 5
7 === 7
5 !== 10
```

Possible outputs:

```js
true
false
```

---

### Logical Operators

Logical operators combine boolean expressions.

```js
&&
||
!
```

Example:

```js
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin);
```

These operators help JavaScript make decisions.

---

## How Numbers Are Stored

At first glance, numbers seem simple.

```js
let price = 10;
let age = 25;
```

However, computers do not understand decimal numbers the way humans do.

Computers think in binary (Base 2).

Humans think in decimal (Base 10).

This difference creates one of JavaScript's most famous surprises:

```js
console.log(0.1 + 0.2);
```

Output:

```js
0.30000000000000004
```

---

## Why Does This Happen?

The numbers:

```text
0.1
0.2
0.3
```

cannot be represented perfectly in binary.

The computer stores approximations instead.

When these approximations are added together, tiny rounding errors appear.

This is called a **floating-point precision problem**.

---

## Real World Example: Bitcoin

Imagine storing Bitcoin directly as decimals.

```text
0.5 BTC
0.1 BTC
0.00000001 BTC
```

Small decimal errors could create financial problems.

Bitcoin avoids this by never storing decimal BTC values internally.

Instead:

```text
1 BTC = 100,000,000 Satoshis
```

Examples:

```text
0.5 BTC = 50,000,000 Satoshis

0.1 BTC = 10,000,000 Satoshis

0.00000001 BTC = 1 Satoshi
```

The computer stores integers, not decimals.

This avoids floating-point precision issues.

---

## Real World Example: Money

Most financial systems do not store:

```text
₹99.99
```

Instead they store:

```text
9999 Paise
```

Why?

Because integers are exact.

Decimals are not always exact.

This small design decision prevents millions of calculation errors.

---

## Type Conversion

Sometimes JavaScript needs to convert one type into another.

This process is called **Type Conversion**.

There are two types:

### Implicit Conversion

JavaScript performs the conversion automatically.

```js
"5" == 5
```

Output:

```js
true
```

This happens because JavaScript converts the string into a number before comparing.

---

### Explicit Conversion

The developer performs the conversion intentionally.

```js
Number("5")
String(123)
Boolean(1)
```

This is usually safer and easier to understand.

---

## Converting Values

### Convert To String

```js
String(123);      // "123"
String(true);     // "true"
String(null);     // "null"
```

### Convert To Number

```js
Number("123");    // 123
Number(true);     // 1
Number(false);    // 0
```

### Convert To Boolean

Falsy values:

```js
false
0
""
null
undefined
NaN
```

Everything else is truthy.

```js
Boolean("hello"); // true
Boolean([]);      // true
Boolean({});      // true
```

---

## Comparing Values

### Strict Equality (Recommended)

```js
===
!==
```

Strict equality compares both:

* Value
* Type

Example:

```js
7 === "7"
```

Output:

```js
false
```

Different types.

---

### Loose Equality

```js
==
!=
```

Loose equality allows type conversion.

```js
7 == "7"
```

Output:

```js
true
```

Because JavaScript converts `"7"` into `7`.

---

## Rule of Thumb

When writing production code:

```js
===
!==
```

should be your default choice.

They are more predictable and easier to reason about.

---

## Key Takeaways

* Operators allow JavaScript to perform work on values.
* Assignment operators store values.
* Arithmetic operators perform calculations.
* Comparison operators produce booleans.
* Logical operators combine conditions.
* Computers store numbers in binary.
* Decimal values can introduce floating-point precision errors.
* Financial systems often use integers instead of decimals.
* Type conversion can be implicit or explicit.
* Prefer `===` over `==`.

---
