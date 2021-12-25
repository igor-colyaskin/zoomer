import {store} from '../bll/store'
import {BACKGROUND_ARRAY} from '../constants/BACKGROUND_ARRAY'

export const ListContainer = () => {
    const {shift, elementHeight, elementNumber} = store.getState()
    const listPosition = 20 - shift * 20


    const container = document.createElement('div')
    container.classList.add('container')
    container.style.top = `${listPosition}px`

    const arr = Array(elementNumber).fill(0)
    arr.map((element, index) => {
        const div = document.createElement('div')
        div.classList.add('point')
        div.classList.add('low')
        div.setAttribute('id', `point-${index + 1}`)
        div.style.height = `${elementHeight}px`
        div.style.background = BACKGROUND_ARRAY[index % 10]
        container.append(div)
        div.innerText = index
    })
    return container
}