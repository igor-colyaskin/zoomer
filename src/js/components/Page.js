import '../../styles/scss/style.scss'
import {Window} from './Window.js'
import {ScrollButton} from './ScrollButton'

export default function (store) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    const buttonForRecursiveTimeout = ScrollButton('recursive-timeout', 'RECURSIVE', -1)


    const window = Window()
    wrapper.append(window, buttonForRecursiveTimeout)
    return wrapper
}
