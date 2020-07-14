import Header from './header'
import icon from './icon.png'
import style from './index.scss'
import createAvatar from './createAvatar'


createAvatar()
let dom  = document.getElementById("dom")
let header1 = new Header()
dom.append(header1.header)

let img = new Image()
img.src = icon
img.classList.add(style.avatar)

dom.append(img)

