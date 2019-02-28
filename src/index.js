import { readText } from './readText'
import { writeText } from './writeText'

export { notifyCopy } from './notify'

export const clipboard = { readText, writeText }

/**
 * @example
 * clipboard.writeText(txt).then(notifyCopy)
 *
 * @example
 * clipboard.readText().then((text) => {console.log('text in clipboard', text)})
 */
