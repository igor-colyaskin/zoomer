export const store = {
    _state: {
        shift: 0,
        windowHeight: 24,
        elementNumber: 1000,
        shiftDirection: 0,
        scrollRate: 0,
        delayArray: [0, 400, 100],
        containerHeightArray: [24, 24, 12]
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        const container = document.querySelector('.container');
        switch (action.type) {
            case 'SHIFT_SLOW_START':
                this._state.scrollRate = 1
                this._state.shiftDirection = action.payload.shiftDirection
                let {elementNumber, windowHeight, delayArray, containerHeightArray} = this._state
                let delay = delayArray[1]

                let repeater = setTimeout(function step() {
                    const {scrollRate, shift, shiftDirection} = store._state

                    if (!scrollRate ||
                        shift === 0 && shiftDirection < 0 ||
                        (shift === (elementNumber - windowHeight) && shiftDirection > 0)
                    ) {
                        clearTimeout(repeater)
                    } else {
                        delay = delayArray[scrollRate]
                        repeater = setTimeout(step, delay);
                        const newState = shift + action.payload.shiftDirection
                        store._state.shift = newState
                        const listPosition = 48 - newState * containerHeightArray[scrollRate]
                        container.style.top = `${listPosition}px`
                    }
                }, delay);
                break
            case 'SHIFT_SLOW_STOP':
                this._state.scrollRate = 0
                break
            case 'SHIFT_QUICK_START':
                container.style.setProperty('--element-container-height', '12px')
                this._state.scrollRate = 2
                break
            case 'SHIFT_QUICK_STOP':
                this._state.scrollRate = 1
                container.style.setProperty('--element-container-height', '24px')
                break


            default:
                console.log('default actions')
        }
    }
}
