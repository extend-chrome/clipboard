import { notify } from '@bumble/chrome'
import { listenTo, error, log } from '@bumble/stream'
import { writeText } from './writeText'

const btnTitle = 'copy again'

const { name, icons = {} } = chrome.runtime.getManifest()

const iconUrl = icons['128'] || icons['16']

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
    .forEach(log('onButtonClicked'))
    .filter(({ id }) => id === noteId)
    .map(() => writeText(txt)) // have it copy to clipboard again
    .clear(() => true) //remove callback
    .catch(error('handleBtnClick'))
}
