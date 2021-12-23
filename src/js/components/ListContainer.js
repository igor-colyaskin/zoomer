import {store} from '../bll/store'

export const ListContainer = () => {
    const {shift} = store.getState()


    const container = document.createElement('div')
    container.classList.add('container')
    container.style.top = `${shift}px`

    const arr = Array(7).fill(0)
    arr.map((element, index) => {
        const div = document.createElement('div')
        div.classList.add('point')
        div.classList.add('low')
        div.setAttribute('id', `point-${index + 1}`)
        container.append(div)
    })
    return container
}