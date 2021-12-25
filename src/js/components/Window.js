import {ListContainer} from './ListContainer'
import {ScrollButton} from './ScrollButton'
import {store} from '../bll/store'

const dispatch = store.dispatch.bind(store)

export const Window = () => {
    const {windowHeight, elementHeight} = store.getState()
    const window = document.createElement('div')
    window.classList.add('window')
    window.style.height = `${windowHeight * elementHeight + 20}px`

    const scrollTopSlow = ScrollButton('scroll-top-slow', 1, 1)
    const scrollTopQuick = ScrollButton('scroll-top-quick', 1, 2)
    const scrollBottomSlow = ScrollButton('scroll-bottom-slow', -1, 1)
    const scrollBottomQuick = ScrollButton('scroll-bottom-quick', -1, 2)

    window.append(
        ListContainer(),
        scrollTopQuick,
        scrollTopSlow,
        scrollBottomSlow,
        scrollBottomQuick)
    return window
}
