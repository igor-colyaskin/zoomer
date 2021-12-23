import {onScrollTopMouseEnter, onScrollBottomMouseEnter} from "../bll/onScrollMouseEnter";
import {ListContainer} from './ListContainer'
import {store} from '../bll/store'

export const Window = () => {
    const {windowHeight} = store.getState()
    const window = document.createElement('div')
    window.classList.add('window')
    window.style.height = `${windowHeight}px`

    const scrollTop = document.createElement('div')
    scrollTop.classList.add('scroll')
    scrollTop.classList.add('scroll-top')
    scrollTop.addEventListener('mouseenter', onScrollTopMouseEnter)

    const scrollBottom = document.createElement('div')
    scrollBottom.classList.add('scroll')
    scrollBottom.classList.add('scroll-bottom')
    scrollBottom.addEventListener('mouseenter', onScrollBottomMouseEnter)

    window.append(ListContainer(), scrollTop, scrollBottom)
    return window
}
