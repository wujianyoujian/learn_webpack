import Header from './header'
import icon from './icon.png'
import './index.scss'


let dom  = document.getElementById("dom")
let header1 = new Header()
dom.append(header1.header)

let img = new Image()
img.src = icon
img.classList.add("avatar")

dom.append(img)

