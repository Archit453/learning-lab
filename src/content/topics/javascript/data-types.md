---
title: "Data Types"
slug: "data-types"
subject: "javascript"
subtitle: "How can a machine distinguish between 42, true, and hello?"
description: "An investigation into values, meaning, and how JavaScript classifies data."
status: "published"
---
# Data Types

## Question

If computer memory is only bits and bytes, how does a program know whether a value is a number, a string, or something else?

---

## Problem

Computer memory stores only bits (0s and 1s).

Consider the binary value:

```text
01000001
```

Without additional context, the same bits could represent:

* The number 65
* The character "A"
* Part of a memory address

The problem is not storing data.

The problem is interpreting data correctly.

---

## Constraint

Programs need to perform different operations on different kinds of values.

For example:

* Numbers can be added and multiplied.
* Strings can be concatenated.
* Booleans can be used in conditions.
* Objects can store collections of related values.

Without knowing what a value represents, the computer cannot safely decide what operations make sense.

---

## Solution

Data Types provide meaning to raw bits.

A data type tells the computer:

1. How the value should be interpreted.
2. Which operations are valid.
3. How the value should be stored and accessed.

A data type is essentially a label attached to data.

Examples:

```js
42
"Hello"
true
```

All of these eventually become bits in memory, but their types determine how JavaScript treats them.

---

## Why JavaScript Chose Dynamic Types

Many programming languages require developers to declare types explicitly.

Java:

```java
int x = 10;
```

JavaScript took a different approach.

Brendan Eich designed JavaScript for web designers and beginners, not professional software engineers.

Instead of requiring type declarations, JavaScript determines the type at runtime.

```js
let x = 10;

x = "Archit";
```

The variable remains the same while the type of the stored value changes.

This decision made JavaScript easier to learn and faster to write.

---

## Variables in JavaScript

Modern JavaScript provides three ways to declare variables:

### var

```js
var name = "JavaScript";
```

Characteristics:

* Function scoped
* Can be reassigned
* Can be redeclared
* Hoisted and initialized with `undefined`

Because of its confusing behavior, modern JavaScript generally avoids `var`.

---

### let

```js
let count = 10;
```

Characteristics:

* Block scoped
* Can be reassigned
* Cannot be redeclared in the same scope
* Exists inside the Temporal Dead Zone before declaration

Use `let` when a value needs to change.

---

### const

```js
const PI = 3.14159;
```

Characteristics:

* Block scoped
* Cannot be reassigned
* Must be initialized during declaration
* Still allows modification of object contents

Use `const` by default.

---

## Primitive Types

JavaScript has seven primitive data types.

### String

```js
const language = "JavaScript";
```

Represents textual data.

---

### Number

```js
const age = 20;
const price = 99.99;
```

Represents both integers and floating-point values.

---

### Boolean

```js
const isLoggedIn = true;
```

Represents either `true` or `false`.

---

### Undefined

```js
let user;
```

A variable that has been declared but not assigned a value.

---

### Null

```js
const data = null;
```

Represents an intentional absence of value.

---

### BigInt

```js
const huge = 9007199254740991n;
```

Used for integers larger than JavaScript's safe number range.

---

### Symbol

```js
const id = Symbol("id");
```

Creates a unique identifier.

---

## Object Type

Everything that is not primitive is an object.

Examples:

### Object Literal

```js
const user = {
  name: "Archit",
  age: 20
};
```

### Array

```js
const numbers = [1, 2, 3];
```

### Function

```js
function greet() {
  console.log("Hello");
}
```

Arrays and functions are special kinds of objects.

---

## Value vs Reference

One of the most important concepts in JavaScript.

### Primitive Values

Primitives are copied by value.

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not affect `a`.

---

### Objects

Objects are copied by reference.

```js
const user1 = {
  score: 10
};

const user2 = user1;

user2.score = 20;

console.log(user1.score); // 20
```

Both variables point to the same object in memory.

---

## typeof Operator

JavaScript can reveal a value's type at runtime.

```js
typeof "Hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof 10n          // "bigint"
typeof Symbol()     // "symbol"

typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"
```

Interesting exception:

```js
typeof null
```

Returns:

```js
"object"
```

This is a historic bug that has remained in JavaScript for compatibility reasons.

---

## Tradeoff

Dynamic typing makes JavaScript:

* Easier to learn
* Faster to write
* More flexible

But it also means certain type-related mistakes appear only while the program is running.

JavaScript chose developer convenience over strict compile-time safety.

---

## Mental Model

Think of a data type as a label attached to raw bits.

The bits store the data.

The type explains how those bits should be interpreted.

Without types, memory is just a collection of zeros and ones.

With types, those bits become numbers, strings, objects, functions, and programs.

---

## Key Takeaway

Data types solve the problem of interpretation.

JavaScript chose dynamic typing so developers could build interactive web applications without explicitly declaring every type.

That decision made JavaScript approachable, flexible, and ultimately one of the most widely used programming languages in the world.

---

## Next Investigation


Data types tell a computer what a value means.

But knowing that a value is a number or a string is only the beginning.

How do we add numbers?

How do we compare values?

How do we combine pieces of information to make decisions?

In other words:

How do we perform operations on data?

The answer begins with operators.

