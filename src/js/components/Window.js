import {ListContainer} from './ListContainer'
import {ScrollButton} from './ScrollButton'
import {store} from '../bll/store'

const dispatch = store.dispatch.bind(store)

export const Window = () => {
    const {windowHeight, elementHeight} = store.getState()
    const window = document.createElement('div')
    window.classList.add('window')
    window.style.height = `${windowHeight * 24 + 96}px`

    const scrollTopSlow = ScrollButton('scroll-top-slow', 'SHIFT_SLOW', 1)
    const scrollTopQuick = ScrollButton('scroll-top-quick', 'SHIFT_QUICK', 1)
    const scrollBottomSlow = ScrollButton('scroll-bottom-slow', 'SHIFT_SLOW', -1)
    const scrollBottomQuick = ScrollButton('scroll-bottom-quick', 'SHIFT_QUICK', -1)


    scrollTopSlow.append(scrollTopQuick)
    scrollBottomSlow.append(scrollBottomQuick)

    window.append(
        ListContainer(),
        scrollTopSlow,
        scrollBottomSlow)
    return window
}
