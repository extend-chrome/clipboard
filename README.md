<p align="center">
  <a href="https://github.com/bumble-org/clipboard" rel="noopener">
 <img width=200px height=200px src="https://imgur.com/Cr9s4h0.png" alt="@bumble/clipboard logo"></a>
</p>

<h3 align="center">@bumble/clipboard</h3>

<div align="center">

[![npm (scoped)](https://img.shields.io/npm/v/@bumble/clipboard.svg)](https://www.npmjs.com/package/@bumble/clipboard)
[![GitHub Issues](https://img.shields.io/github/issues-raw/bumble-org/clipboard.svg)](https://github.com/@bumble/clipboard/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/bumble-org/clipboard.svg)](https://github.com/@bumble/clipboard/pulls)
[![GitHub Contributors](https://img.shields.io/github/contributors/bumble-org/clipboard.svg)](https://github.com/bumble-org/clipboard/graphs/contributors)
[![GitHub last commit](https://img.shields.io/github/last-commit/bumble-org/clipboard.svg)](https://github.com/bumble-org/clipboard)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/bumble-org/clipboard.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/bumble-org/clipboard/stargazers/)

</div>

---

Using the clipboard in a Chrome Extension can be a pain. This extension emulates the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) `readText` and `writeText` methods without requiring extra permissions.

## Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)
- [Extra Features](#extras)

## Getting started <a name = "getting_started"></a>

You will need to use a bundler like [Rollup](https://rollupjs.org/guide/en/) or Webpack to include this library in the build of Chrome extension. 

See [`rollup-plugin-chrome-extension`](https://github.com/bumble-org/rollup-plugin-chrome-extension) for an easy way use Rollup to build your Chrome extension!

### Installation

```sh
$ npm i @bumble/clipboard
```

## Usage <a name = "usage"></a>

```javascript
import { clipboard } from '@bumble/clipboard'

// Read text from the clipboard, or "paste"
clipboard.readText()
  .then((text) => {
    console.log('clipboard contents', text)
  })

// Write text to the clipboard, or "copy"
clipboard.writeText('write this to the clipboard')
  .then((text) => {
    console.log(text, 'was written to the clipboard')
  })
```

> Although this library works without any extra [permissions](https://developer.chrome.com/extensions/declare_permissions), it would be polite to your users to declare the `"clipboardRead"` and `"clipboardWrite"` permissions in your [`manifest.json`](https://developer.chrome.com/extensions/manifest).

## Extra Features <a name = "extras"></a>

### Notify on Copy

This library contains an extra function that creates a desktop notification when text has been copied, with a button to copy that text again.

> This feature requires the `"notifications"` [permission](https://developer.chrome.com/extensions/declare_permissions) in your [`manifest.json`](https://developer.chrome.com/extensions/manifest).

It uses [`@bumble/notify`](https://github.com/bumble-org/notify), a Chrome extension notification library with a simpler API than [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).

### Usage

```javascript
import { clipboard, notifyCopy } from '@bumble/clipboard'

// Write text to the clipboard
clipboard.writeText('copy this')
  // then create a copy notification
  .then(notifyCopy)
```

<!-- TODO: screen shot of notification -->

<!-- TODO: example repo using lib -->
<!-- ## Recipe

Use this Chrome extension repo as a starting place! -->

<!-- ![Fiverr Gig: I will make you a Chrome extension](https://img.shields.io/badge/Fiverr%20Gig-I%20will%20make%20you%20a%20Chrome%20extension-brightgreen.svg) -->