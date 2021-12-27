export const store = {
    _state: {
        shift: 0,
        windowHeight: 24,
        elementNumber: 400,
        shiftDirection: 0,
        scrollRate: 0,
        delayArray: [0, 400, 40]
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
                let {elementNumber, windowHeight, delayArray} = this._state

                let delay = delayArray[1]
                let repeater = setTimeout(function step() {
                    if(!store._state.scrollRate||
                        store._state.shift === 0 && store._state.shiftDirection < 0 ||
                        (store._state.shift === (elementNumber - windowHeight) && store._state.shiftDirection > 0)
                ) {
                        clearTimeout(repeater)
                    } else {
                        delay = delayArray[store._state.scrollRate]
                        repeater = setTimeout(step, delay);
                        const newState = store._state.shift + action.payload.shiftDirection
                        store._state.shift = newState
                        const listPosition = 48 - newState * 24
                        container.style.top = `${listPosition}px`
                    }
                }, delay);
                break
            case 'SHIFT_SLOW_STOP':
                this._state.scrollRate= 0
                break
            case 'SHIFT_QUICK_START':
                this._state.scrollRate = 2
                break
            case 'SHIFT_QUICK_STOP':
                this._state.scrollRate = 1
                break

                // container.style.setProperty('--element-container-height', '12px')

            default:
                console.log('default actions')
        }
    }
}
