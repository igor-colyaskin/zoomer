import '../../styles/scss/style.scss'
import {onPointMouseEnter} from "../bll/onPointMouseEnter";
import {onScrollTopMouseEnter, onScrollBottomMouseEnter} from "../bll/onScrollMouseEnter";
import {Window} from './Window.js'

export default function (store) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    const window = Window()
    wrapper.append(window)
    return wrapper
}
