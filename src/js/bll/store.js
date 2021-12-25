export const store = {
    _state: {
        shift: 0,
        windowHeight: 10,
        elementHeight: 20,
        elementNumber: 2000,
        shiftIncrement: 0
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        const container = document.querySelector('.container');
        switch (action.type) {
            case  'SHIFT_LIST' :
                this._state.shiftIncrement = action.payload.shiftIncrement
                const {shift, elementNumber, windowHeight, shiftIncrement} = this._state

                let shifter = setInterval(() => {
                    if (this._state.shiftIncrement === 0 ||
                        this._state.shift === 0 && this._state.shiftIncrement < 0 ||
                        (this._state.shift === (elementNumber - windowHeight + 2) && this._state.shiftIncrement > 0)
                    ) {
                        clearInterval(shifter)
                        return
                    }

                    const newState = this._state.shift + action.payload.shiftIncrement
                    this._state.shift = newState
                    const listPosition = 20 - newState * 20
                    container.style.top = `${listPosition}px`
                }, 10)
                break
            case  'STOP_SHIFT' :
                this._state.shiftIncrement = 0
                break
            default:
                console.log('default actions')
        }
    }
}
