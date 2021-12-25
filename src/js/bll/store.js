export const store = {
    _state: {
        shift: 0,
        currentHighElement: 0,
        windowHeight: 10,
        elementHeight: 20,
        elementNumber: 20,
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        const container = document.querySelector('.container');
        switch (action.type) {
            case  'SHIFT_LIST' :
                const {shift, elementNumber, windowHeight} = this._state
                const {shiftIncrement} = action.payload
                if (shift === 0 && shiftIncrement < 0) return
                if (shift === (elementNumber - windowHeight + 2) && shiftIncrement > 0) return
                const newState = this._state.shift + action.payload.shiftIncrement
                this._state.shift = newState
                const listPosition = 20 - newState * 20
                container.style.top = `${listPosition}px`
                break
            default:
                console.log('default actions')
        }
    }
}
