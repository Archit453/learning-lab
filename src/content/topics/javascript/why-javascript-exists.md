---
title: "Why JavaScript Exists"
slug: "why-javascript-exists"
subject: "javascript"
subtitle: "The story of Netscape, Sun, Microsoft, and a language built in ten days."
description: "Why the web needed a programming language inside the browser."
status: "published"

modes:
  notes:
    src: "/notes/javascript/Day1.svg"
    alt: "Handwritten revision notes"
---
# Why JavaScript Exists

## Question

Why does JavaScript exist if programming languages like C, C++, and Java already existed?

---

## Problem

In the early 1990s, the web was mostly static.

A browser could display text, images, and links, but it could not react to user actions.

When a user submitted a form:

1. The browser sent a request to the server.
2. The server validated the data.
3. The server sent a response back.

Even a simple validation error required a full round trip to the server.

On slow internet connections, users could wait several seconds just to discover that a form field was invalid.

The web needed a way to react immediately inside the browser.

---

## Constraint

At the same time, another problem existed.

Software was tied to operating systems.

* Windows software ran on Windows.
* Mac software ran on Mac.
* Unix software ran on Unix.

Sun Microsystems wanted a language that could run everywhere.

Their solution was Java.

Java introduced the idea of:

> Write Once, Run Anywhere.

Programs would run inside the Java Virtual Machine (JVM), allowing the same code to execute on different operating systems.

Java quickly became one of the most exciting technologies of the 1990s.

---

## Solution

In 1995, Netscape partnered with Sun Microsystems.

The original vision was simple:

* Java would power complex applications.
* Browsers would become interactive platforms.

However, Java was too heavyweight for small page interactions.

Tasks such as:

* Form validation
* Button clicks
* Showing or hiding content
* Updating page elements

did not require an entire Java application.

Netscape needed a lightweight scripting language that could live directly inside web pages.

Brendan Eich was tasked with creating one.

He built the first version in roughly ten days.

The language was originally called Mocha, then LiveScript, and finally JavaScript.

The name was chosen largely because Java was extremely popular at the time.

---

## Tradeoff

JavaScript gained immediate attention because of its connection to Java.

But the name also created decades of confusion.

Despite their similar syntax, Java and JavaScript were designed for very different purposes.

Java was designed as a powerful application language.

JavaScript was designed as a lightweight scripting language for web pages.

The marketing decision helped adoption, but it also caused many developers to assume the two languages were closely related.

---

## Mental Model

Technologies rarely win because they are technically superior.

They win because they solve the constraints of their environment.

Java solved portability.

JavaScript solved interactivity.

Browsers needed interactivity more than they needed portable applications.

So JavaScript became the language of the web.

---

## Why JavaScript Won

If Java was more powerful, why did JavaScript become the language of the web?

Several reasons:

### No Plugins

Java applications required browser plugins.

JavaScript was built directly into the browser.

### Faster Startup

Java applets had startup overhead.

JavaScript could run immediately.

### Better Integration

JavaScript could directly interact with page elements.

Java applets lived in isolated containers.

### Security

Java plugins eventually became major security concerns.

Browsers gradually restricted and removed them.

As the web evolved, JavaScript became more capable while Java applets slowly disappeared.

---

## The Same Problem Returned

Years later, developers wanted to run large applications inside browsers.

Games, CAD software, video editors, and other performance-intensive applications pushed JavaScript beyond its original purpose.

This led to the creation of WebAssembly (WASM).

WebAssembly allows languages like C and C++ to run efficiently inside browsers.

But even WebAssembly did not replace JavaScript.

JavaScript still provides:

* Access to browser APIs
* DOM manipulation
* Event handling
* Communication between browser features

JavaScript remains the glue layer of the web.

---

## Key Takeaway

JavaScript was not created to replace Java.

It was created to solve a different problem.

The web needed a lightweight language that could make pages interactive without requiring heavyweight applications.

Thirty years later, JavaScript still performs the same fundamental role:

connecting users, browsers, and applications together.

---

## Next Investigation

Computers only store bits.

So how can the same memory represent:

- 42
- "Hello"
- true
- [1, 2, 3]

What tells the computer how a value should be interpreted?

The answer begins with data types.
