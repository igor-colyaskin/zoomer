import '../../styles/scss/style.scss'

export default function (store) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper-page')

    const onMouseEnter = (id) => {
        console.log(id)
    }
const arr = Array(6).fill(0)
    arr.map((element, index)=>{
        const div = document.createElement('div')
        div.classList.add('point')
        const size = index? 'low': 'high'
        div.classList.add(size)
        div.setAttribute('id', `point-${index + 1}`)
        div.addEventListener('mouseenter', () => onMouseEnter(index + 1))
        wrapper.append(div)
    })
    return wrapper
}
