---
title: "Introduction to Node.js, v2"
description: These are notes from the 'Introduction to Node.js' course on Frontend Masters.
permalink: /frontend-masters/introduction-nodejs-v2
layout: "../../index.astro"
pagenav:
  - name: Introduction
    href: introduction
  - name: Installing Node.js
    href: installing-nodejs
  - name: Executing Node
    href: executing-node
  - name: Node.js Intro Q&A
    href: nodejs-intro-qa
  - name: Globals
    href: globals
  - name: Modules
    href: modules
  - name: File System
    href: file-system
  - name: Error Handling
    href: error-handling
  - name: Errors and Async Await Q&A
    href: errors-and-async-await-qa
  - name: Creating Local Packages & npm
    href: creating-local-packages--npm
  - name: Finding & Installing Packages
    href: finding-installing-packages
  - name: Using npm Packages
    href: using-npm-packages
  - name: Running npm Scripts
    href: running-npm-scripts
  - name: Setup a CLI Script with Node.js
    href: setup-a-cli-script-with-nodejs
  - name: Building a Reddit CLI
    href: building-a-reddit-cli
  - name: Creating a Low-Level Server
    href: creating-a-low-level-server
  - name: Testing an API with HTTPie
    href: testing-an-api-with-httpie
  - name: Create a Server API with Express
    href: create-a-server-api-with-express
  - name: Dynamic Routes in Express
    href: dynamic-routes-in-express
  - name: Vanilla Unit Tests
    href: vanilla-unit-tests
  - name: Jest
    href: jest
  - name: Asynchronous Tests
    href: asynchronous-tests
  - name: Debugging
    href: debugging
  - name: "Deployment: Packages"
    href: deployment-packages
  - name: "Deployment: Servers"
    href: deployment-servers
  - name: Wrapping Up
    href: wrapping-up-1
---

## Introduction

### Introduction

If you know JavaScript, Node.js will be familiar, but is not 1:1 equivalent to JavaScript, Node.js is written in JavaScript.

This is also a good workshop for any developer who has worked with any OS-level language.

### Installing Node.js

Node.js is a runtime build on top of Chrome's V8 engine which allows apps to be developed in JavaScript outside of a web browser. If you know JS then you already know how to develop with Node.js, kinda...

Here's some use cases for Node.js: API's and servers, databases, CLI's, build tools, automations, basic scripting, GPU shopping bots.

Go to the Node.js website and it will automatically detect your computer / OS to install the correct version of Node.js. It is recommended to use Node Version Manager (nvm) to install Node as this tool allows you to have multiple versions of Node installed that you can switch between - especially useful if you work on a variety of projects and need to switch between different versions of Node. Once you have nvm installed, run `nvm install --lts` to get the current version of Node that is in Long Term Support.

### Executing Node

There are a number of ways you can execute Node, we'll cover a few. First up is Node REPL (Read, Evaluate, Print, Loop) which is an interactive shell that will be in the execution context of the runtime of your choice. Simply open a terminal and type `node` to fire up REPL. While you can do some things directly in the REPL, you really want to feed it a file. To exit the REPL in the terminal, press `ctrl + C` (twice?). If you are familiar with browser APIs, they are generally not available in Node. i.e. `alert('message')` will not work in Node as `alert` is a browser API. `console` does exist in Node.
### Node.js Intro Q&A

Q: If the Chorme engine is updated to v9, what impact will that have on Node?

A: Any feature that is not browser specific would be made available in Node.

Q: What is the difference between v1 of this course and v2?

A: v2 is using a newer version of Node.

Q: Deno?

A: Yeah, it's that hot new fire that addresses the shortcomings of Node and prebundles the most useful packages so you do not have to figure out what they are; testing, etc...

## Basic Components

### Globals

Like a browser, Node comes with some practical globals to use:

`global` - similar to `window` but for Node

`__dirname` - a `String` value that points to the directory name of the file it is used in

`__filename` - a `String` value that points to the file name

`process` - from env vars to what machine you're on, an `Object` that contains all the context you need about the currrent program being executed

`exports` `module` `require` - used for creating and exposing modules in a Node app

### Modules

Node uses modules to share your JS within your app. A module is reusable code that has its own context. Modules cannot interfere or pollute the global scope. Modules can be created, imported, and shared.

By default, Node uses common js modules. Newer versions of Ndoe can use ES6 modules. To opt-in to ES6 module syntax, use the  `.mjs` extension instead of `.js`. This workshop will follow ES6 module syntax as it is widely supported and is the standard. Let's take a look at some modules:

Common JS:

```js
const action = () => {
    console.log('hello');
}

module.exports = action
```


ES6:

```js
export const action = () => {
    console.log('hello');
}
```

Q: If I'm using Common JS in a project, could I gradually switch to ES6 Module syntax?

A: You can, but it has some caveats. You have to figure out the right module syntax to correctly interop between the various files you have in your project.

Here's a quick list of some of Nodes internal modules:

`fs` - useful for interacting with the file system

`path` - lib to assist with manipulating file paths and all their nuances

`child_process` - spawn subprocesses in the background

`http` - interact with OS level networking - useful for creating servers

### File System

Before Node, there was not a way to access a machine's file system with JS. With Node, we have `fs` which is short for 'file system'. In Node, if you `console.log(fs)`, you can see all of the available methods. You may notice that there is a 'Sync' version of each method, non-Sync methods are asynchronous. There are many methods on the `fs module`, let's look at using the `readFile` method to... read a file:

Create an HTML file `template.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>{title}</h1>
  <p>{body}</p>
</body>
</html>
```

Notice the 2 placeholders (denoted by `{}`) in the above HTML file. They will be interpolated when we look at the `writeFile` method. To read the file:

Create a module file `index.mjs`:

```js
import { readFile } from 'fs/promises'

let template = await readFile(new URL('./template.html', import.meta.url), 'utf-8')
```

The `fs` module has async, sync, and promise versions of it's methods, in the above example, we are using the promise version because it has a 'cleaner' API and using async / non-blocking methods is preferred.

Still in the `index.mjs` file, update it to include `writeFile`:

```js
import { readFile, writeFile } from 'fs/promises'

let template = await readFile(new URL('./test.html', import.meta.url), 'utf-8')

const data = {
  title: 'My new file',
  body: 'I wrote this file to disk using node'
}

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val)
}

await writeFile(new URL('./index.html', import.meta.url), template)
```

If you run the above code, you should have an `index.html` file that is the same as the `template.html` file you created, but with the placeholders now having actual content. This is a quick example of what static analysis tools like TypeScript, Babel, Webpack, and Rollup do.

### Error Handling

When an exception is thrown in Node, the current process exits with a code of `1`. This errors out and stops the program. Here's how to handle errors in Node based-on the type of code; async, promise, async callback, async await, etc...

The standard pattern for dealing with errors in async operations looks like so:

```js
fs.readFile(filepath, (error, result) => {
    if (error) {
        // error
    } else {
        // no error
    }
})
```

Callbacks accept a `(error, result)` argument signature where `error` is `null` if there is no error. For `promises`, continue to use the `.catch()` pattern. For `async/await` use `try/catch`.

```js
try {
    const result = await asyncAction()
} catch (e) {
    // error
}
```

For sync errors, use the same `try/catch` from above. If nothing else works, use a catchall:

```js
process.on('uncaughtException', cb) // 💥
```

### Errors and Async Await Q&A

Q: How are we able to access `process` without importing it?

A: Don't be stupid. `process` is one of the global variables inside of Node. Idiot.

Q: What is the difference between an error and an exception?

A: The only difference is that an error can cause an exception.

## Packages

### Creating Local Packages & npm

Node has a thriving community that has produced millions of Node projects that are available to be installed and consumed by your Node application. These are called packages. A package can be comprised of several modules and other packages. Node has built-in support for these module packages. To consume a [Node] package, your app must itself be a package. To make your app a package, you need a file called `package.json`. When you installed Node, it came with something called the Node Package Manager (npm) which is a CLI. To initialize your app as a package, type `npm init` in the root directory of your project. `npm init` will initialize a new package by walking you through a series of prompts. Once finished, you'll see a `package.json` file appear in your app directory.

Now your "app" is a package, and its `package.json` should have the following fields:

`"name"` - the name of your package - can be anything if local, if publishing to `npm` or elsewhere, you'd have to check what names are available

`"version"` - the Semantic Version Number (semver) for your package

`"main"` - the main entry point for your package

`"scrpts"` - object of custom scripts to be executed with `npm` CLI

NPM has several commands. Here are a few that you will use most commonly:

`npm install ${package-name}` - installs modules from remote registries or local sources

`npm test` - runs the `test` script in your `package.json`

`npm uninstall ${package-name}` - uninstalls the specified package

Unless you don't write tests, no matter the company or the app, you will use the above three commands all the time. Any additional commands you may have will be unique to your app.

### Finding & Installing Packages

Most [npm] modules are hosted on a registry somewhere, the most used of which is the NPM registry. Modules cann also be published to Github and there are many other registries. NPM allows you to point to any registry. As with most research, finding a good package requires a good search query. Once you find a package that seems relevant, take a look at the details of the package; when was it last updated? recently? a long time ago? what does its Github / repository page look like? does it appear active?

In addition to finding a package that is relevant to what you are looking for, it is important that the package is also actively maintained. Keep that in mind.

### Using npm Packages

When you are ready to use an NPM package, read the documentation for that package so you understand how to import it and use it!

### Running npm Scripts

In the `package.json` file, there is a `scripts` object that contains all of your package scripts. To execute one of those scripts you would open a console / terminal and type `npm run ${script_name}`. You may commonly see `dev`, `test`, and / or `serve`, but you can add anything you want here and call it as noted.

## CLI

### Setup a CLI Script with Node.js

A CLI (command line interface) is a program designed to start and complete one-off tasks. Node is a great runtime [environment] to create a CLI in that will run on any machine that has Node installed on it. Creating a CLI in Node just takes an extra step or two because they re just an ordinary Node app wrapped behind a `bin` command. We will create a CLI that opens a random Reddit post in a browser. We'll start from scratch with a new folder and make it a package with `npm init`. In the new folder that is now an npm package, make a new file `reddit.mjs`:

```js
// reddit.mjs
#! /usr/bin/env node

console.log('hello from CLI')
```

The first line of the above code is called a hashbang. It is needed to tell the computer where the interpreter is lovated that is needed to execute the file, in our case, Node. Next, we need to tell Node what theh name of ouru CLI is so we can actually use it in out terminal. Let's add that information to our `package.json`:

```json
"bin": {
  "reddit": "./reddit.mjs"
}
```

While in the directory of your package, run `npm install -g` to install your CLI globally / locally on your machine. This will allow you to simply type `reddit` in your console to run the reddit CLI.

### Building a Reddit CLI

## Servers

### Creating a Low-Level Server
### Testing an API with HTTPie
### Create a Server API with Express
### Dynamic Routes in Express

## Testing

### Vanilla Unit Tests
### Jest
### Asynchronous Tests
### Debugging

## Deployment

### Deployment: Packages
### Deployment: Servers

## Wrapping Up

### Wrapping Up