export const store = {
    _state: {
        shift: 0,
        windowHeight: 10,
        elementHeight: 20,
        elementNumber: 400,
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
            case  'SHIFT_LIST' :
                this._state.shiftIncrement = action.payload.shiftIncrement
                this._state.shiftSpeed = action.payload.shiftSpeed
                const {elementNumber, windowHeight} = this._state

                let shifter = setInterval(() => {
                    if (this._state.shiftIncrement === 0 ||
                        this._state.shift === 0 && this._state.shiftIncrement < 0 ||
                        (this._state.shift === (elementNumber - windowHeight + 3) && this._state.shiftIncrement > 0)
                    ) {
                        clearInterval(shifter)
                        return
                    }

                    const newState = this._state.shift + action.payload.shiftIncrement
                    this._state.shift = newState
                    const listPosition = 40 - newState * 20
                    container.style.top = `${listPosition}px`
                }, action.payload.shiftSpeed)
                break
            case  'STOP_SHIFT' :
                this._state.shiftIncrement = 0
                break
            case  'SHIFT_SLOW_START' :
                this._state.slowShift = true
                console.log('slow: ' + this._state.slowShift + ', quick: ' +  this._state.quickShift + ', direction: ' + this._state.shiftDirection)
                break
            case  'SHIFT_SLOW_STOP' :
                this._state.slowShift = false
                console.log('slow: ' + this._state.slowShift + ', quick: ' +  this._state.quickShift + ', direction: ' + this._state.shiftDirection)
                break
            case  'SHIFT_QUICK_START' :
                this._state.quickShift = true
                console.log('slow: ' + this._state.slowShift + ', quick: ' +  this._state.quickShift + ', direction: ' + this._state.shiftDirection)
                break
            case  'SHIFT_QUICK_STOP' :
                this._state.quickShift = false
                console.log('slow: ' + this._state.slowShift + ', quick: ' +  this._state.quickShift + ', direction: ' + this._state.shiftDirection)
                break
            default:
                console.log('default actions')
        }
    }
}
