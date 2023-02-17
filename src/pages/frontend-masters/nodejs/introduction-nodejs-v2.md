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
### File System
### Error Handling
### Errors and Async Await Q&A

## Packages

### Creating Local Packages & npm
### Finding & Installing Packages
### Using npm Packages
### Running npm Scripts

## CLI

### Setup a CLI Script with Node.js
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