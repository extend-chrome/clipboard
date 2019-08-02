<p align="center">
  <a href="https://github.com/bumble-org/clipboard" rel="noopener">
 <img width=200px height=200px src="https://imgur.com/Cr9s4h0.png" alt="@bumble/clipboard logo"></a>
</p>

<h3 align="center">@bumble/clipboard</h3>

<div align="center">

[![npm (scoped)](https://img.shields.io/npm/v/@bumble/clipboard.svg)](https://www.npmjs.com/package/@bumble/clipboard)
[![GitHub last commit](https://img.shields.io/github/last-commit/bumble-org/clipboard.svg)](https://github.com/bumble-org/clipboard)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![TypeScript Declarations Included](https://img.shields.io/badge/types-TypeScript-informational)](#typescript)

[![Fiverr: We make Chrome extensions](https://img.shields.io/badge/Fiverr%20-We%20make%20Chrome%20extensions-brightgreen.svg)](https://www.fiverr.com/jacksteam)
[![ko-fi](https://img.shields.io/badge/ko--fi-Buy%20me%20a%20coffee-ff5d5b)](https://ko-fi.com/K3K1QNTF)
</div>

---

Using the clipboard in a Chrome Extension can be a pain. The async Clipboard API [doesn't work in background scripts](https://bugs.chromium.org/p/chromium/issues/detail?id=874848&can=1&q=chrome%20extension%20clipboard%20api&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified) and workarounds require lots of boilerplate. This library works in all Chrome extension contexts. It emulates the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) `readText` and `writeText` methods.

## Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)
- [Features](#features)

## Getting started <a name = "getting_started"></a>

You will need to use a bundler like [Rollup](https://rollupjs.org/guide/en/) or Webpack to include this library in the build of Chrome extension. 

See [`rollup-plugin-chrome-extension`](https://github.com/bumble-org/rollup-plugin-chrome-extension) for an easy way use Rollup to build your Chrome extension!

### Installation

```sh
$ npm i @bumble/clipboard
```

Add the [permissions](https://developer.chrome.com/extensions/declare_permissions) `"clipboardRead"` and/or `"clipboardWrite"` to your [`manifest.json`](https://developer.chrome.com/extensions/manifest).

```json
{
  "permissions": ["clipboardRead", "clipboardWrite"]
}
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

## Features <a name = "features"></a>

### TypeScript Definitions <a name = "typescript"></a>

TypeScript definitions are included, so no need to install an additional `@types` library!

### Notify on Copy

This library contains an extra function that creates a desktop notification when text has been copied, with a button to copy that text again.

> This feature requires the `"notifications"` [permission](https://developer.chrome.com/extensions/declare_permissions) in your [`manifest.json`](https://developer.chrome.com/extensions/manifest).

It uses [`@bumble/notify`](https://github.com/bumble-org/notify), a Chrome extension notification library with a simpler API than [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).


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
