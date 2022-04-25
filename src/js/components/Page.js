import '../../styles/scss/style.scss'
// import {Window} from './Window.js'
// import {ScrollButton} from './ScrollButton'

export default function () {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    //
    // const window = Window()
    // wrapper.append(window)
    wrapper.innerText = 'Hello world'

    console.log(Math.ceil(Math.random() * 100))
    return wrapper
}
