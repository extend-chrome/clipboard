import { notify } from '@bumble/chrome'
import { listenTo, error, log } from '@bumble/stream'
import { writeText } from './writeText'

export const notifyCopy = txt => {
  const btnTitle = 'copy again'
  const { name, icons = {} } = chrome.runtime.getManifest()
  const iconUrl =
    icons[
      Object.keys(icons)
        .map(s => parseInt(s))
        .reduce((r, x) => (r > x ? r : x), 0)
        .toString()
    ]

  return notify
    .create({
      type: 'basic',
      title: name,
      message: `"${txt}" was copied to the clipboard.`,
      iconUrl,
      buttons: [{ title: btnTitle }],
    })
    .then(handleBtnClick(txt))
}

const handleBtnClick = txt => noteId => {
  listenTo(chrome.notifications.onButtonClicked)
    .forEach(log('onButtonClicked'))
    .filter(({ id }) => id === noteId)
    .map(() => writeText(txt)) // have it copy to clipboard again
    .clear(() => true) //remove callback
    .catch(error('handleBtnClick'))
}
