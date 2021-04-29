<p align="center">
  <a href="https://github.com/extend-chrome/clipboard" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/Pw8LMCb.png" alt="@extend-chrome/clipboard"></a>
</p>

<h3 align="center">@extend-chrome/clipboard</h3>

<div align="center">

[![npm (scoped)](https://img.shields.io/npm/v/@extend-chrome/clipboard.svg)](https://www.npmjs.com/package/@extend-chrome/clipboard)
[![GitHub last commit](https://img.shields.io/github/last-commit/extend-chrome/clipboard.svg)](https://github.com/extend-chrome/clipboard)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![TypeScript Declarations Included](https://img.shields.io/badge/types-TypeScript-informational)](#typescript)

</div>

<div align="center">

[![Chrome Extension Tutorials on YouTube](https://img.shields.io/badge/Chrome%20Extension%20Tutorials-YouTube-c4302b.svg)](https://www.youtube.com/channel/UCVj3dGw75v8aHFYD6CL1tFg)
[![ko-fi](https://img.shields.io/badge/Buy%20us%20a%20tea-ko--fi-29ABE0)](https://ko-fi.com/jacksteam)

</div>

---

Using the clipboard in a Chrome Extension can be a pain. The async Clipboard API [doesn't work in background scripts](https://bugs.chromium.org/p/chromium/issues/detail?id=874848&can=1&q=chrome%20extension%20clipboard%20api&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified) and workarounds require lots of boilerplate. This library works in all MV2 Chrome extension contexts. It emulates the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) `readText` and `writeText` methods using `document.execCommand`.

## Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)

## Getting started <a name = "getting_started"></a>

You will need to use a bundler like [Rollup](https://rollupjs.org/guide/en/) or Webpack to include this library in the build of Chrome extension.

See [`rollup-plugin-chrome-extension`](https://github.com/extend-chrome/rollup-plugin-chrome-extension) for an easy way use Rollup to build your Chrome extension!

### Installation

```sh
$ npm i @extend-chrome/clipboard
```

Add the [permissions](https://developer.chrome.com/extensions/declare_permissions) `"clipboardRead"` and/or `"clipboardWrite"` to your [`manifest.json`](https://developer.chrome.com/extensions/manifest). Remember, only request the permissions you need! For example, if your extension only reads the clipboard, only request `"clipboardRead"`.

```json
{
  "permissions": ["clipboardRead", "clipboardWrite"]
}
```

### TypeScript Definitions <a name = "typescript"></a>

TypeScript definitions are included, so no need to install an additional `@types` library!

## Usage <a name = "usage"></a>

```javascript
import { clipboard } from '@extend-chrome/clipboard'

// Read text from the clipboard, or "paste"
clipboard.readText().then((text) => {
  console.log('clipboard contents', text)
})

// Write text to the clipboard, or "copy"
clipboard.writeText('write this to the clipboard').then((text) => {
  console.log(text, 'was written to the clipboard')
})
```
