import '../../styles/scss/style.scss'

export default function (store) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper-page')

    const div1 = document.createElement('div')
    div1.classList.add('point')
    div1.classList.add('high')
    div1.setAttribute('id', 'point-1')

    const div2 = document.createElement('div')
    div2.classList.add('point')
    div2.classList.add('low')
    div2.setAttribute('id', 'point-2')

    const div3 = document.createElement('div')
    div3.classList.add('point')
    div3.classList.add('low')
    div3.setAttribute('id', 'point-3')

    const div4 = document.createElement('div')
    div4.classList.add('point')
    div4.classList.add('low')
    div4.setAttribute('id', 'point-4')

    const div5 = document.createElement('div')
    div5.classList.add('point')
    div5.classList.add('low')
    div5.setAttribute('id', 'point-5')

    const div6 = document.createElement('div')
    div6.classList.add('point')
    div6.classList.add('low')
    div6.setAttribute('id', 'point-6')

    wrapper.append(div1, div2, div3, div4, div5, div6)
    return wrapper
}
