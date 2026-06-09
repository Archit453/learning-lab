---
title: "Strings"
slug: "strings"
subject: "javascript"
subtitle: "How do computers understand text?"
description: "An investigation into characters, text, Unicode, and string operations."
status: "published"
---
# Strings

Before this, we learned how JavaScript works with numbers.

But think about the apps you use every day.

When you open:

* Instagram
* WhatsApp
* YouTube
* Gmail

what do you see?

Mostly text.

```txt
User names
Messages
Comments
Emails
Captions
```

Computers need a way to store all this text.

That's where **Strings** come in.

---

## 1 What Is A String?

Imagine you have a box.

Inside the box, you put letters.

```txt
H
E
L
L
O
```

When these letters are kept together:

```txt
HELLO
```

we call it a **String**.

A string is simply a sequence of characters.

Characters can be:

```txt
Letters
Numbers
Symbols
Spaces
```

Examples:

```js
"Hello"
```

```js
"JavaScript"
```

```js
"user@gmail.com"
```

```js
"12345"
```

Notice something interesting.

This:

```js
12345
```

is a number.

But this:

```js
"12345"
```

is text.

The quotes make all the difference.

---

## Key Characteristics Of Strings

There are three important things you should know.

### 1. Strings Are Primitive Values

Think of a primitive as a simple value.

Examples:

```js
10
true
"Hello"
```

All of these are primitive values.

Strings belong to this family.

---

### 2. Strings Are Indexed

Imagine a row of lockers.

```txt
J  a  v  a
```

Each locker has a number.

```txt
J  a  v  a
0  1  2  3
```

JavaScript gives every character a position.

This position is called an **index**.

The first index is always:

```txt
0
```

not:

```txt
1
```

This surprises many beginners.

---

### 3. Strings Are Immutable

This is a big word.

But the idea is simple.

**Immutable means cannot be changed directly.**

Imagine writing something using a permanent marker.

```txt
HELLO
```

Now you want:

```txt
YELLO
```

You cannot erase only the first letter.

Instead you create a new version.

Strings behave similarly.

We'll see this soon.

---

## Creating Strings

JavaScript gives us three ways.

### Single Quotes

```js
let name = 'Alex';
```

---

### Double Quotes

```js
let city = "Mumbai";
```

These work exactly the same.

Choose whichever feels comfortable.

---

### Why Have Both?

Imagine this:

```js
let text = "He said, 'Hello!'";
```

Easy.

The outside uses double quotes.

The inside uses single quotes.

Similarly:

```js
let text = 'She replied, "Hi!"';
```

Now the outside uses single quotes.

The inside uses double quotes.

Much cleaner.

---

## Template Literals

Modern JavaScript introduced something even better.

Backticks:

```js
let message = `Welcome`;
```

Notice:

```txt
`
```

This is not a quote.

It is called a **backtick**.

We'll see why template literals are powerful later.

---

## The Length Property

Imagine a teacher asks:

> How many letters are in "Hello"?

You would count:

```txt
H E L L O
```

Answer:

```txt
5
```

JavaScript can do this automatically.

```js
let greeting = "Hello";

console.log(greeting.length);
```

Output:

```txt
5
```

---

### Empty String

What about:

```js
let text = "";
```

There are no characters.

```js
console.log(text.length);
```

Output:

```txt
0
```

---

## Real World Example

Imagine a website requires:

```txt
Password must contain at least 8 characters
```

How can JavaScript check?

```js
let password = "secret123";

console.log(password.length >= 8);
```

Output:

```txt
true
```

This is exactly how many websites validate passwords.

---

## Accessing Characters

Let's take:

```js
let message = "JavaScript";
```

Visualize it like this:

```txt
J  a  v  a  S  c  r  i  p  t
0  1  2  3  4  5  6  7  8  9
```

Every character has a home.

Every home has a number.

---

### Getting The First Character

```js
console.log(message[0]);
```

Output:

```txt
J
```

---

### Getting Another Character

```js
console.log(message[4]);
```

Output:

```txt
S
```

JavaScript simply looks inside locker number 4.

---

### Getting The Last Character

How do we find the last letter?

One common trick:

```js
console.log(
  message[message.length - 1]
);
```

Output:

```txt
t
```

Why?

Because:

```txt
Length = 10
```

and:

```txt
10 - 1 = 9
```

The last character lives at index 9.

---

## The Golden Rule: Strings Are Immutable

Remember our permanent marker example?

Let's try changing a string.

```js
let name = "alex";

name[0] = "A";

console.log(name);
```

Output:

```txt
alex
```

Wait.

Why didn't it change?

Because strings are immutable.

JavaScript refuses to modify them directly.

---

### The Correct Way

Instead of changing the existing string,

JavaScript creates a new one.

```js
let name = "alex";

let upperName =
  name.toUpperCase();

console.log(upperName);
```

Output:

```txt
ALEX
```

Notice:

```js
console.log(name);
```

still gives:

```txt
alex
```

The original string remains untouched.

---

## Changing Letter Case

### Uppercase

```js
let whisper =
  "please be quiet";

console.log(
  whisper.toUpperCase()
);
```

Output:

```txt
PLEASE BE QUIET
```

---

### Lowercase

```js
let shout =
  "PLEASE BE QUIET";

console.log(
  shout.toLowerCase()
);
```

Output:

```txt
please be quiet
```

---

## Real World Example

Users may type:

```txt
ADMIN
Admin
admin
AdMiN
```

All mean the same thing.

A common solution:

```js
let role = "AdMiN";

console.log(
  role.toLowerCase()
);
```

Output:

```txt
admin
```

Now comparisons become much easier.

---

## Finding Text Inside A String

Imagine a game.

You have a sentence.

```txt
The quick brown fox
```

And someone asks:

> Is the word "fox" present?

JavaScript can answer.

---

### includes()

```js
let sentence =
  "The quick brown fox";

console.log(
  sentence.includes("fox")
);
```

Output:

```txt
true
```

---

```js
console.log(
  sentence.includes("cat")
);
```

Output:

```txt
false
```

---

## Why Is This Useful?

Imagine checking emails.

```js
let email =
  "user@gmail.com";

console.log(
  email.includes("@")
);
```

Output:

```txt
true
```

A very common validation.

---

## Finding Position

Sometimes we don't just want to know if something exists.

We want to know where it exists.

---

### indexOf()

```js
let sentence =
  "The quick brown fox";

console.log(
  sentence.indexOf("fox")
);
```

Output:

```txt
16
```

Meaning:

```txt
The word starts at position 16
```

---

### If Not Found

```js
console.log(
  sentence.indexOf("cat")
);
```

Output:

```txt
-1
```

Think of:

```txt
-1
```

as JavaScript saying:

```txt
I looked everywhere.
Couldn't find it.
```

---

### lastIndexOf()

Suppose the word appears many times.

```js
let sentence =
  "fox dog fox cat fox";
```

```js
console.log(
  sentence.lastIndexOf("fox")
);
```

JavaScript starts searching from the end.

This gives the last occurrence.

---

## Extracting Part Of A String

Imagine:

```txt
JavaScript
```

Sometimes we only want:

```txt
Java
```

or:

```txt
Script
```

---

### slice()

```js
let text = "JavaScript";

console.log(
  text.slice(0, 4)
);
```

Output:

```txt
Java
```

Think:

```txt
Start at 0
Stop before 4
```

---

```js
console.log(
  text.slice(4)
);
```

Output:

```txt
Script
```

---

### Negative Indexes

This is a cool trick.

```js
console.log(
  text.slice(-6)
);
```

Output:

```txt
Script
```

Negative numbers count backwards from the end.

---

### substring()

```js
text.substring(0, 4);
```

Works similarly to `slice()`.

But it doesn't support negative indexes.

---

### substr()

```js
text.substr(4, 6);
```

This older method uses:

```txt
Start Position
+
Length
```

However:

```txt
substr() is deprecated
```

Avoid using it in new code.

Prefer:

```txt
slice()
```

instead.

---

## Replacing Text

Suppose we have:

```txt
Hello World
```

and want:

```txt
Hello JavaScript
```

---

### replace()

```js
let greeting =
  "Hello World";

console.log(
  greeting.replace(
    "World",
    "JavaScript"
  )
);
```

Output:

```txt
Hello JavaScript
```

---

### Important Gotcha

Consider:

```js
let text =
  "hello hello hello";
```

```js
console.log(
  text.replace("hello", "hi")
);
```

Output:

```txt
hi hello hello
```

Only the first occurrence changes.

---

### replaceAll()

```js
console.log(
  text.replaceAll(
    "hello",
    "hi"
  )
);
```

Output:

```txt
hi hi hi
```

Everything gets replaced.

---

## Cleaning Up Whitespace

Users make mistakes.

Imagine:

```txt
"    Archit    "
```

Extra spaces everywhere.

---

### trim()

```js
let username =
  "    Archit    ";

console.log(
  username.trim()
);
```

Output:

```txt
Archit
```

---

### trimStart()

Removes spaces only from the beginning.

---

### trimEnd()

Removes spaces only from the end.

---

## Real World Example

Login forms use these methods all the time.

Because:

```txt
Archit
```

and

```txt
 Archit
```

should usually be treated the same.

---

## Splitting Strings

Imagine:

```txt
apple,banana,mango
```

Currently this is one string.

But we may want:

```txt
apple
banana
mango
```

as separate pieces.

---

### split()

```js
let fruits =
  "apple,banana,mango";

console.log(
  fruits.split(",")
);
```

Output:

```js
["apple", "banana", "mango"]
```

---

### Splitting Words

```js
let sentence =
  "The quick brown fox";

console.log(
  sentence.split(" ")
);
```

Output:

```js
["The", "quick", "brown", "fox"]
```

---

### Splitting Characters

```js
let letters = "abc";

console.log(
  letters.split("")
);
```

Output:

```js
["a", "b", "c"]
```

---

## Why Is This Useful?

Soon we'll learn Arrays.

`split()` is one of the most common ways to convert text into arrays.

---

# 5.13 Template Literals — The Modern Way

Earlier we learned three ways to create strings:

```js id="f8z4wn"
"Hello"
```

```js id="c7hvpu"
'Hello'
```

```js id="vfzv22"
`Hello`
```

At first glance they all look similar.

So why were template literals introduced?

Because developers often need to combine strings and variables together.

---

## The Problem With The Old Approach

Imagine we have:

```js id="v7e4mz"
let name = "Alice";
let age = 30;
```

and we want to create:

```txt id="9mabca"
Hello, my name is Alice and I am 30 years old.
```

Before template literals, developers wrote:

```js id="pn4fme"
let message =
  "Hello, my name is " +
  name +
  " and I am " +
  age +
  " years old.";
```

This works.

But imagine the sentence becomes larger.

The code quickly becomes difficult to read.

---

## A Better Way

Template literals allow us to place variables directly inside a string.

```js id="5h8r7k"
let name = "Alice";
let age = 30;

let message =
  `Hello, my name is ${name} and I am ${age} years old.`;
```

Much cleaner.

Much easier to read.

---

## What Is `${}`?

Think of `${}` as a special window.

Whatever is inside the window gets evaluated and inserted into the string.

```js id="q8e6xj"
let name = "Alice";

console.log(`Hello ${name}`);
```

Output:

```txt id="7bw4iw"
Hello Alice
```

JavaScript looks inside the window:

```txt id="j7nvtw"
${name}
```

finds:

```txt id="qwxjlwm"
Alice
```

and places it into the string.

---

## Expressions Work Too

The cool part is that `${}` can do more than just insert variables.

It can evaluate expressions.

```js id="1r2r3d"
let age = 30;

let futureMessage =
  `Next year, I will be ${age + 1}.`;

console.log(futureMessage);
```

Output:

```txt id="dr1pt0"
Next year, I will be 31.
```

Notice:

```js id="z3g8w7"
${age + 1}
```

JavaScript calculates:

```txt id="6rckkk"
30 + 1
```

and inserts:

```txt id="y8wrmh"
31
```

into the string.

---

## Real World Example

Imagine a shopping website.

```js id="8a6ng8"
let user = "Archit";
let products = 5;
```

Using template literals:

```js id="lh7ltm"
let message =
  `Hello ${user}, you have ${products} products in your cart.`;

console.log(message);
```

Output:

```txt id="trz5gx"
Hello Archit, you have 5 products in your cart.
```

This is one reason template literals are used everywhere in modern JavaScript.

---

# Multi-line Strings

Another problem developers faced was writing text across multiple lines.

Imagine creating HTML using strings.

---

## The Old Way

Before template literals:

```js id="6tbqtr"
let htmlOld =
  '<div>\n' +
  '  <p>Hello</p>\n' +
  '</div>';
```

Notice all the:

```txt id="lc1e0y"
+
\n
```

The code becomes messy very quickly.

---

## The Modern Way

Template literals automatically respect new lines.

```js id="3kjg4s"
let htmlNew = `
<div>
  <p>Hello</p>
</div>
`;
```

Much cleaner.

Much easier to read.

---

## Why Developers Love Template Literals

Without template literals:

```js id="5gnk7s"
"Hello " +
name +
", your score is " +
score
```

becomes difficult to maintain.

With template literals:

```js id="m9tz89"
`Hello ${name}, your score is ${score}`
```

everything stays readable.

---

## Quick Challenge

Predict the output:

```js id="n6n4zy"
let name = "Alex";
let age = 20;

console.log(
  `Hi, I am ${name} and next year I will be ${age + 1}`
);
```

Think about it before running the code.

---

## Key Takeaway

Template literals solve two common problems:

1. Inserting variables and expressions into strings.
2. Creating multi-line strings cleanly.

Whenever you're writing modern JavaScript, template literals are usually the preferred choice.

---

# Coming Up Next

We just learned how to work with a single piece of text.

But what if we have:

```txt
100 student names
500 comments
1000 products
```

Creating:

```js
let student1;
let student2;
let student3;
```

would be a nightmare.

We need a better way.

And that's exactly what Arrays solve.
