export const store = {
    _state: {
        shift: 0,
        windowHeight: 10,
        elementHeight: 20,
        elementNumber: 100,
        shiftDirection: 0,
        slowShift: false,
        quickShift: false,
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        const container = document.querySelector('.container');
        switch (action.type) {
            case  'SHIFT_SLOW_START' :
                this._state.slowShift = true

                this._state.shiftDirection = action.payload.shiftDirection
                let {elementNumber, windowHeight} = this._state

                let shifter = setInterval(() => {
                    if (this._state.shiftDirection === 0 ||
                        !this._state.slowShift ||
                        this._state.shift === 0 && this._state.shiftDirection < 0 ||
                        (this._state.shift === (elementNumber - windowHeight + 3) && this._state.shiftDirection > 0)
                    ) {
                        clearInterval(shifter)
                        return
                    }

                    const newState = this._state.shift + action.payload.shiftDirection
                    this._state.shift = newState
                    const listPosition = 40 - newState * 20
                    container.style.top = `${listPosition}px`
                }, 200)
                break
            case  'SHIFT_SLOW_STOP' :
                this._state.slowShift = false
                this._state.shiftDirection = 0
                break
            case  'SHIFT_QUICK_START' :
                this._state.quickShift = true
                elementNumber = this._state.elementNumber
                windowHeight = this._state.windowHeight

                this._state.shiftDirection = action.payload.shiftDirection

                let shifterQuick = setInterval(() => {
                    if (this._state.shiftDirection === 0 ||
                        !this._state.quickShift ||
                        this._state.shift === 0 && this._state.shiftDirection < 0 ||
                        (this._state.shift === (elementNumber - windowHeight + 3) && this._state.shiftDirection > 0)
                    ) {
                        clearInterval(shifterQuick)
                        return
                    }

                    const newState = this._state.shift + action.payload.shiftDirection
                    this._state.shift = newState
                    const listPosition = 40 - newState * 20
                    container.style.top = `${listPosition}px`
                }, 10)

                break
            case  'SHIFT_QUICK_STOP' :
                this._state.quickShift = false
                this._state.shiftDirection = 0
                break
            default:
                console.log('default actions')
        }
    }
}
