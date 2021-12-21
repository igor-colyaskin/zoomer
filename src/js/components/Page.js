import '../../styles/scss/style.scss'

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

    const scrollDown = document.createElement('div')
    scrollDown.classList.add('scroll')
    scrollDown.classList.add('scroll-down')

    window.append( container, scrollUp, scrollDown)


    const onMouseEnter = (id) => {
        const divCollection = document.querySelectorAll('.point')
        divCollection.forEach((element, index) => {
            if(id === (index + 1)) {
                element.classList.remove('low')
                element.classList.add('high')
            }else{
                element.classList.remove('high')
                element.classList.add('low')
            }
        })
    }
const arr = Array(7).fill(0)
    arr.map((element, index)=>{
        const div = document.createElement('div')
        div.classList.add('point')
        const size = index? 'low': 'high'
        div.classList.add(size)
        div.setAttribute('id', `point-${index + 1}`)
        div.addEventListener('mouseenter', () => onMouseEnter(index + 1))
        container.append(div)
    })
    wrapper.append(window)
    return wrapper
}
