import {store} from '../bll/store'

const dispatch = store.dispatch.bind(store)

export const ScrollButton = (scrollClass, actionType, shiftDirection) => {
    const {windowHeight, elementHeight} = store.getState()

    const scrollButton = document.createElement('div')
    scrollButton.classList.add('scroll')
    scrollButton.classList.add(scrollClass)
    scrollButton.addEventListener('mouseenter', () => {
        dispatch({
            type: `${actionType}_START`,
            payload: {shiftDirection}
        })
    })
    scrollButton.addEventListener('mouseleave', () => {
        dispatch({type: `${actionType}_STOP`})
    })
    return scrollButton
}