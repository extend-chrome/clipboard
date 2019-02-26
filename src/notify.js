import { notify } from '@bumble/chrome'
import { listenTo, error } from '@bumble/stream'
import { writeText } from './writeText'

const btnTitle = 'copy again'

const {
  name,
  icons = {},
  browser_action: { default_icon = {} } = {},
} = chrome.runtime.getManifest()

const iconUrl =
  icons['128'] ||
  icons['16'] ||
  default_icon['16'] ||
  default_icon['24'] ||
  default_icon['32']

export const notifyCopy = txt =>
  writeText(txt)
    .then(() => ({
      type: 'basic',
      title: name,
      message: `"${txt}" was copied to the clipboard.`,
      iconUrl,
      buttons: [{ title: btnTitle }],
    }))
    .then(notify.create)
    .then(handleBtnClick(txt))

const handleBtnClick = txt => noteId => {
  listenTo(chrome.notifications.onButtonClicked)
    .filter(id => id === noteId)
    .map(() => writeText(txt)) // have it copy to clipboard again
    .clear(() => true) //remove callback
    .catch(error('handleBtnClick'))
}
