const readText = (): Promise<string> =>
  new Promise((resolve, reject) => {
    // Create hidden input to receive text
    const el = document.createElement('textarea')
    el.value = 'before paste'
    document.body.append(el)

    // Paste from clipboard into input
    el.select()
    const success = document.execCommand('paste')

    // The contents of the clipboard
    const text = el.value
    el.remove()

    if (!success) reject(new Error('Unable to read from clipboard'))

    // Resolve with the contents of the clipboard
    resolve(text)
  })

const writeText = (text: string): Promise<string> =>
  new Promise((resolve, reject) => {
    // Create hidden input with text
    const el = document.createElement('textarea')
    el.value = text
    document.body.append(el)

    // Select the text and copy to clipboard
    el.select()
    const success = document.execCommand('copy')
    el.remove()

    if (!success) reject(new Error('Unable to write to clipboard'))

    resolve(text)
  })

export const clipboard = { readText, writeText }
