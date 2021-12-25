import '../../styles/scss/style.scss'
import {Window} from './Window.js'

export default function (store) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    const window = Window()
    wrapper.append(window)
    return wrapper
}
