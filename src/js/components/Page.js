import '../../styles/scss/style.scss'
import {onPointMouseEnter} from "../bll/onPointMouseEnter";
import {onScrollDownMouseEnter, onScrollUpMouseEnter} from "../bll/onScrollMouseEnter";

export default function (store) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    const window = document.createElement('div')
    window.classList.add('window')

    const container = document.createElement('div')
    container.classList.add('container')

    const scrollUp = document.createElement('div')
    scrollUp.classList.add('scroll')
    scrollUp.classList.add('scroll-up')
    scrollUp.addEventListener('mouseenter', onScrollUpMouseEnter)

    const scrollDown = document.createElement('div')
    scrollDown.classList.add('scroll')
    scrollDown.classList.add('scroll-down')
    scrollDown.addEventListener('mouseenter', onScrollDownMouseEnter)

    window.append(container, scrollUp, scrollDown)

    const arr = Array(7).fill(0)
    arr.map((element, index) => {
        const div = document.createElement('div')
        div.classList.add('point')
        const size = index ? 'low' : 'high'
        div.classList.add(size)
        div.setAttribute('id', `point-${index + 1}`)
        div.addEventListener('mouseenter', () => onPointMouseEnter(index + 1))
        container.append(div)
    })
    wrapper.append(window)
    return wrapper
}
