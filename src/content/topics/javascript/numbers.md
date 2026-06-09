---
title: "Numbers"
slug: "numbers"
subject: "javascript"
subtitle: "How can a computer understand quantity?"
description: "An investigation into how JavaScript stores and works with numbers."
status: "published"
---
# Numbers in JavaScript

So far we've learned how to make decisions using operators and repeat actions using loops.

But what are we actually working with?

Most real-world applications deal with numbers:

* Bank balances
* Product prices
* OTPs
* Ratings
* Temperatures
* Scores
* Distances

Before we can build useful applications, we need to understand how JavaScript handles numbers.

---

# A Surprising Fact About JavaScript Numbers

Many programming languages have multiple numeric types.

For example:

```txt
int     → Whole numbers
float   → Decimal numbers
double  → High precision decimal numbers
```

JavaScript took a different approach.

It has only one number type:

```js
let age = 21;
let price = 99.99;

console.log(typeof age);
console.log(typeof price);
```

Output:

```txt
number
number
```

Whether it's:

```js
10
```

or

```js
10.5
```

JavaScript treats both as:

```txt
number
```

---

# Why Did JavaScript Do This?

Imagine you're teaching someone basic math.

Instead of saying:

```txt
This box is for integers.
This box is for floating points.
This box is for doubles.
```

you simply say:

```txt
Put all numbers here.
```

JavaScript follows this philosophy.

It makes learning easier.

But this simplicity comes with a few interesting side effects.

---

# Creating Numbers

The most common way:

```js
let age = 22;
let price = 499.99;
```

---

## Scientific Notation

For very large or very small numbers:

```js
let billion = 1e9;

console.log(billion);
```

Output:

```txt
1000000000
```

Think of:

```js
1e9
```

as:

```txt
1 × 10⁹
```

Similarly:

```js
let tiny = 5e-6;
```

means:

```txt
0.000005
```

---

# Different Number Systems

Computers don't naturally think in decimal.

They think in binary.

JavaScript allows us to represent numbers in different bases.

### Binary

```js
let binary = 0b1010;

console.log(binary);
```

Output:

```txt
10
```

---

### Hexadecimal

```js
let hex = 0xFF;

console.log(hex);
```

Output:

```txt
255
```

---

### Octal

```js
let octal = 0o77;

console.log(octal);
```

Output:

```txt
63
```

Most of the time you'll work with decimal numbers, but seeing these formats helps you understand how computers represent data internally.

---

# The Famous JavaScript Problem

Let's try something simple.

```js
console.log(0.1 + 0.2);
```

Expected:

```txt
0.3
```

Actual:

```txt
0.30000000000000004
```

Wait...

What?

---

# Why Does This Happen?

To understand this, we need to think about how computers store numbers.

Computers store data using binary:

```txt
0 and 1
```

Some decimal numbers cannot be represented perfectly in binary.

Just like:

```txt
1 ÷ 3 = 0.333333333...
```

never ends,

certain decimal values never end in binary.

So JavaScript stores the closest possible approximation.

Those tiny approximations sometimes create weird results.

---

# Should You Panic?

No.

For most applications:

```js
0.1 + 0.2
```

being slightly inaccurate doesn't matter.

But in financial systems it absolutely matters.

Imagine:

```txt
₹0.00000004 error
```

happening millions of times.

That becomes real money.

---

## Formatting Numbers for Display

Sometimes users expect to see numbers in a clean format.

For example:

```js
let price = 19.99123;

console.log(price.toFixed(2));
```

Output:

```txt
19.99
```

The `toFixed()` method rounds a number and returns a string with a fixed number of decimal places.

This is useful for displaying:

* Prices
* Ratings
* Percentages
* Measurements

### Important

`toFixed()` is primarily a display tool.

For example:

```txt
₹99.99
```

looks much better than:

```txt
₹99.991234567
```

However, professional financial systems usually do **not** store money using floating-point numbers.

Instead of:

```js
99.99
```

they often store:

```js
9999 // paise
```

and convert it to:

```txt
₹99.99
```

only when displaying it to the user.

This avoids floating-point precision problems while still providing a clean user experience.

---

# Special Number Values

JavaScript has some special numbers.

---

## Infinity

```js
console.log(1 / 0);
```

Output:

```txt
Infinity
```

Think of it as:

> A value larger than JavaScript can represent.

---

## Negative Infinity

```js
console.log(-1 / 0);
```

Output:

```txt
-Infinity
```

---

## NaN

Stands for:

```txt
Not a Number
```

Example:

```js
console.log("hello" / 2);
```

Output:

```txt
NaN
```

JavaScript attempted a mathematical operation that makes no sense.

---

# A Weird JavaScript Fact

```js
console.log(typeof NaN);
```

Output:

```txt
number
```

Yes.

Even though NaN means:

```txt
Not a Number
```

its type is still:

```txt
number
```

Welcome to JavaScript.

---

# Useful Number Methods

## Checking If Something Is NaN

```js
let result = 0 / 0;

console.log(Number.isNaN(result));
```

Output:

```txt
true
```

---

## Checking If Something Is An Integer

```js
console.log(Number.isInteger(10));
```

Output:

```txt
true
```

```js
console.log(Number.isInteger(10.5));
```

Output:

```txt
false
```

---

# Converting Numbers to Strings

Sometimes we want:

```js
255
```

to become:

```txt
"255"
```

Use:

```js
let num = 255;

console.log(num.toString());
```

Output:

```txt
"255"
```

---

# Number Formatting

## toFixed()

```js
let price = 19.99123;

console.log(price.toFixed(2));
```

Output:

```txt
19.99
```

---

## toPrecision()

```js
let num = 123.456;

console.log(num.toPrecision(4));
```

Output:

```txt
123.5
```

This focuses on significant digits instead of decimal places.

---

# The Math Object

Imagine JavaScript had to store every mathematical operation inside the Number type.

That would become messy.

Instead JavaScript gives us a dedicated toolbox:

```txt
Math
```

Think of it as:

```txt
A box full of mathematical tools.
```

---

# Useful Math Constants

## PI

```js
console.log(Math.PI);
```

Output:

```txt
3.141592653589793
```

Useful when working with circles.

---

# Rounding Numbers

## Math.round()

```js
Math.round(4.7);
```

Output:

```txt
5
```

---

## Math.floor()

Always rounds down.

```js
Math.floor(4.9);
```

Output:

```txt
4
```

---

## Math.ceil()

Always rounds up.

```js
Math.ceil(4.1);
```

Output:

```txt
5
```

---

## Math.trunc()

Removes decimals completely.

```js
Math.trunc(4.9);
```

Output:

```txt
4
```

---

# Other Useful Functions

## Absolute Value

```js
Math.abs(-10);
```

Output:

```txt
10
```

---

## Square Root

```js
Math.sqrt(25);
```

Output:

```txt
5
```

---

## Power

```js
Math.pow(2, 3);
```

Output:

```txt
8
```

---

## Maximum

```js
Math.max(10, 50, 5);
```

Output:

```txt
50
```

---

## Minimum

```js
Math.min(10, 50, 5);
```

Output:

```txt
5
```

---

# Random Numbers

One of the most commonly used Math methods is:

```js
Math.random()
```

---

## What Does It Return?

```js
console.log(Math.random());
```

Output:

```txt
0.48273
```

or

```txt
0.91822
```

or

```txt
0.10374
```

The value is always:

```txt
Greater than or equal to 0
Less than 1
```

Range:

```txt
[0, 1)
```

---

# Generating Random Integers

Suppose we want:

```txt
1 to 10
```

instead of:

```txt
0.58372
```

We can use:

```js
Math.floor(Math.random() * 10) + 1
```

Possible outputs:

```txt
1
5
8
10
```

---

# Understanding The Formula

The formula looks scary.

Let's break it down.

First:

```js
Math.random() * 10
```

creates a number between:

```txt
0 and 9.999...
```

Then:

```js
Math.floor()
```

removes decimals.

Giving:

```txt
0 to 9
```

Finally:

```js
+1
```

shifts everything.

Giving:

```txt
1 to 10
```

---

# Real World Corner: How OTPs Are Actually Generated?

After learning:

```js
Math.floor(Math.random() * 900000) + 100000
```

you might think:

> "So banks, Google, Uber and other companies generate OTPs using Math.random()?"

Not really.

For learning JavaScript, `Math.random()` is perfect.

For security-sensitive systems, it isn't.

---

## The Problem With Simple Randomness

Most traditional random number generators start with something called a **seed value**.

Think of it like this:

```txt
Seed
↓
Mathematical Formula
↓
Random Looking Numbers
```

Example:

```txt
Seed = 1234

Output:
4821
9172
3310
```

If another computer uses the same algorithm and same seed:

```txt
Seed = 1234

Output:
4821
9172
3310
```

it generates exactly the same sequence.

This is why such generators are called:

```txt
Pseudo Random Number Generators (PRNGs)
```

The numbers look random, but they are actually following a predictable pattern.

---
## Where Did The Seed Come From?

At this point you might wonder:

> If a pseudo-random generator needs a seed, where does that seed come from?

Historically, many systems used the current time.

Example:

```txt
Current Time:
10:30:15

Seed = 103015
```

The random generator would then produce:

```txt
4821
9172
3310
...
```

This worked surprisingly well for many applications.

The problem was that the seed was often predictable.

An attacker might know:

```txt
OTP generated around 10:30 AM
```

Now instead of guessing millions of possibilities, they only need to test seeds near that time.

This dramatically reduces security.

---

## Why Clock-Based Seeds Became A Problem

Imagine two computers start a random generator at exactly the same moment.

```txt
Computer A
Seed = 103015

Computer B
Seed = 103015
```

If both use the same algorithm:

```txt
Output:
4821
9172
3310
...
```

The sequence becomes identical.

That's dangerous for security-sensitive systems.

---

## Modern Systems Use More Than Time

Today's systems still use seeds internally.

The difference is that the seed is no longer based on something simple like:

```txt
Current Time
```

Instead it is derived from a large collection of unpredictable information:

```txt
Current Time
+
CPU Activity
+
Network Events
+
Memory State
+
Hardware Noise
+
User Activity
```

All of this contributes entropy.

The result is a seed that is extremely difficult to predict.

You can think of it like this:

```txt
Old Approach

Clock
↓
Seed
↓
Random Generator
↓
OTP
```

versus

```txt
Modern Approach

Thousands of Unpredictable Events
↓
Entropy Pool
↓
Secure Seed
↓
CSPRNG
↓
OTP
```

The seed still exists.

It's just much harder to guess.

---
## Why Is That Dangerous?

Imagine an attacker discovers:

```txt
The Algorithm
+
The Seed
```

Now they can predict future values.

For a game this might not matter.

For an OTP system, this is a huge security risk.

---

## How Modern Systems Generate OTPs

Modern systems use something called a:

```txt
Cryptographically Secure Random Number Generator
```

or simply:

```txt
CSPRNG
```

Instead of relying on a simple seed, the operating system continuously collects randomness from many unpredictable sources.

Examples include:

```txt
Keyboard timings
Mouse movements
CPU timings
Network events
Memory state
Hardware random generators
Disk timings
```

These events are collected into something often called an:

```txt
Entropy Pool
```

Think of entropy as:

> Unpredictable information collected from the real world.

The operating system feeds this entropy into a secure random generator which produces values that are extremely difficult to predict.

The flow looks like:

```txt
Hardware Noise
+
System Activity
+
User Activity
↓
Entropy Pool
↓
CSPRNG
↓
OTP
```

This is much safer than relying on a simple mathematical sequence.

---

## Then Why Did Ride-Sharing Apps Change Their OTP Systems?

Years ago many ride-sharing apps used completely random trip OTPs.

Example:

```txt
4827
9361
5718
```

Every ride received a different code.

This provided an extra layer of verification.

However, a new problem appeared.

Users often forgot their OTP.

Drivers repeatedly had to ask for it.

Trips became slower.

Support requests increased.

---

## The Real Engineering Problem

Many beginners think:

> The challenge is generating a random OTP.

But companies think differently.

The actual question is:

> How do we verify the rider while keeping the experience fast and simple?

Notice the difference.

One focuses on code.

The other focuses on the user's experience.

---

## If OTP Becomes Fixed, Won't Multiple Users Have The Same OTP?

Yes.

And that's completely fine.

Because the OTP is usually not the only thing being verified.

Imagine the server stores:

```txt
Ride ID: 87521
User: Rahul
Driver: Amit
OTP: 1234
```

and another trip:

```txt
Ride ID: 87522
User: Priya
Driver: Karan
OTP: 1234
```

The OTP is identical.

But the rides are different.

The system is actually verifying:

```txt
Ride ID
+
User
+
Driver
+
OTP
```

not just:

```txt
OTP
```

---

## Think About Passwords

Millions of people use:

```txt
123456
```

as a password.

Yet login systems still work.

Why?

Because websites don't check:

```txt
Password
```

alone.

They check:

```txt
Username
+
Password
```

The combination must match.

The same idea applies to OTP systems.

---

## Could 20,000 Users Have The Same OTP?

Technically, yes.

If the system already knows:

```txt
Ride ID
Driver
User
Vehicle
Trip Information
```

then:

```txt
1234
```

by itself means nothing.

The OTP only makes sense within the context of a specific ride.

---

## The Bigger Lesson

When learning JavaScript, we ask:

> How can I generate a random number?

When building real products, we ask:

> What problem am I actually trying to solve?

Good developers write code.

Great developers understand why the code exists in the first place.

---

# Key Takeaways

* JavaScript has only one numeric type: `number`.
* Decimal numbers may not always be perfectly accurate.
* `Infinity` and `NaN` are special numeric values.
* The `Math` object provides useful mathematical tools.
* `Math.random()` generates pseudo-random values.
* Real-world OTP systems use cryptographically secure randomness.
* Good engineering is about solving problems, not just writing code.

---

# One Question Before We Continue

So far we've worked with numbers:

10

99.99

3.14

But most applications don't just work with numbers.

Think about:

User names
Emails
Messages
Comments

How does JavaScript store and manipulate text?

For example:

"Hello World"

How does JavaScript know where the letter:

W

is located?

Let's explore.