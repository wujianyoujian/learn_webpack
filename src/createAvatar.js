import avatar from './icon.png'
import style from './index.scss'


function createAvatar() {
  let img = new Image()
  img.src = avatar
  img.classList.add(style.avatar)
  let dom  = document.getElementById("dom")
  dom.append(img)
}

export default createAvatar