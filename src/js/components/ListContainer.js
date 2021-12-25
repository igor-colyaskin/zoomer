import {store} from '../bll/store'

export const ListContainer = () => {
    const {shift, elementHeight, elementNumber} = store.getState()
    const listPosition = 20 - shift * 20

    const backgroundArray = [
        'deeppink',
        'orange',
        'gold',
        'yellowgreen',
        'aqua',
        'blue',
        'indigo',
        'purple',
        'black',
        'magenta']

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
        div.style.background = backgroundArray[index % 10]
        container.append(div)
    })
    return container
}