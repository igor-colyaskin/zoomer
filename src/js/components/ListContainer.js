import {store} from '../bll/store'
import {BACKGROUND_ARRAY} from '../constants/BACKGROUND_ARRAY'

export const ListContainer = () => {
    const {shift, elementHeight, elementNumber} = store.getState()
    const listPosition = 48 - shift * 20


    const container = document.createElement('div')
    container.classList.add('container')
    container.style.top = `${listPosition}px`

    const arr = Array(elementNumber).fill(0)
    arr.map((el, index) => {
        const elementContainer = document.createElement('div')
        elementContainer.classList.add('element-container')
        elementContainer.setAttribute('id', `element-container-${index + 1}`)
        elementContainer.style.maxHeight = `${elementHeight}px`

        const elementContent = document.createElement('div')
        elementContent.classList.add('element-content')
        elementContent.style.background = `rgb(${BACKGROUND_ARRAY[index % 8]})`
        elementContent.innerText = index

        elementContainer.append(elementContent)
        container.append(elementContainer)
    })
    return container
}