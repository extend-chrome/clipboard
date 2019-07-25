// Type definitions for @bumble/clipboard
// Definitions by: Jack and Amy Steam <https://jackandamy.rocks>

export namespace clipboard {
  /**
   * Read text from the clipboard, or "paste".
   *
   * ```javascript
   * clipboard.readText()
   *   .then((text) => {
   *     console.log('clipboard contents', text)
   *   })
   * ```
   */
  export function readText(): Promise<string>

  /**
   * Write text to the clipboard, or "copy".
   *
   * ```javascript
   * clipboard.writeText('write this to the clipboard')
   *   .then((text) => {
   *     console.log(text)
   *   })
   * ```
   */
  export function writeText(str: string): Promise<string>
}

/**
 * Write text to the clipboard, then create a copy notification.
 *
 * ```javascript
 * clipboard.writeText('copy this')
 *   .then(notifyCopy)
 * ```
 */
export function notifyCopy(txt: string): Promise<string>
