import {store} from '../bll/store'

const dispatch = store.dispatch.bind(store)

export const ScrollButton = (scrollType, shiftIncrement, shiftSpeed) => {
    const {windowHeight, elementHeight} = store.getState()

    const scrollButton = document.createElement('div')
    scrollButton.classList.add('scroll')
    scrollButton.classList.add(scrollType)
    scrollButton.addEventListener('mouseenter', () => {
        dispatch({type: 'SHIFT_LIST', payload: {shiftIncrement, shiftSpeed}})
    })
    scrollButton.addEventListener('mouseleave', () => {
        dispatch({type: 'STOP_SHIFT'})
    })
    return scrollButton
}