import { writeText } from './writeText'
import { notify } from '@bumble/notify'

export const notifyCopy = (txt) => {
  const btnTitle = 'copy again'
  return notify.create({
    message: `"${txt}" was copied to the clipboard.`,
    buttons: [
      { title: btnTitle, onClick: () => writeText(txt) },
    ],
  })
}
