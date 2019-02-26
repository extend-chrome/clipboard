export const writeText = str => {
  // Create hidden input with text
  const el = document.createElement('textarea')
  el.value = str
  document.body.append(el)

  // Select the text and copy to clipboard
  el.select()
  const success = document.execCommand('copy')
  el.remove()

  return success
    ? Promise.resolve()
    : Promise.reject('Unable to write to clipboard')
}
