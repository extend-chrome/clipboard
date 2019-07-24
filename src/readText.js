export const readText = () => {
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

  // Resolve with the contents of the clipboard
  return success
    ? Promise.resolve(text)
    : Promise.reject(new Error('Unable to read from clipboard'))
}
