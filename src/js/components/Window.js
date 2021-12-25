import {ListContainer} from './ListContainer'
import {store} from '../bll/store'

const dispatch = store.dispatch.bind(store)

export const Window = () => {
    const {windowHeight, elementHeight} = store.getState()
    const window = document.createElement('div')
    window.classList.add('window')
    window.style.height = `${windowHeight * elementHeight}px`

    const scrollTop = document.createElement('div')
    scrollTop.classList.add('scroll')
    scrollTop.classList.add('scroll-top')
    scrollTop.addEventListener('mouseenter', () => {
        dispatch({type: 'SHIFT_LIST', payload: {shiftIncrement: 1}})
    })

    const scrollBottom = document.createElement('div')
    scrollBottom.classList.add('scroll')
    scrollBottom.classList.add('scroll-bottom')
    scrollBottom.addEventListener('mouseenter', () => {
        dispatch({type: 'SHIFT_LIST', payload: {shiftIncrement: -1}})
    })

    window.append(ListContainer(), scrollTop, scrollBottom)
    return window
}
