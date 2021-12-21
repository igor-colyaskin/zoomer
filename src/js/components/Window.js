import {onScrollDownMouseEnter, onScrollUpMouseEnter} from "../bll/onScrollMouseEnter";

export const Window = () => {
    const window = document.createElement('div')
    window.classList.add('window')

    const scrollUp = document.createElement('div')
    scrollUp.classList.add('scroll')
    scrollUp.classList.add('scroll-up')
    scrollUp.addEventListener('mouseenter', onScrollUpMouseEnter)

    const scrollDown = document.createElement('div')
    scrollDown.classList.add('scroll')
    scrollDown.classList.add('scroll-down')
    scrollDown.addEventListener('mouseenter', onScrollDownMouseEnter)

    window.append(scrollUp, scrollDown)
    return window
}
