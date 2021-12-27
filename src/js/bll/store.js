export const store = {
    _state: {
        shift: 0,
        windowHeight: 24,
        elementNumber: 400,
        shiftDirection: 0,
        slowShift: false,
        quickShift: false,
        isScrollEnabled: false
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        const container = document.querySelector('.container');
        switch (action.type) {
            case 'RECURSIVE_START':
                console.log('recursive on')
                this._state.isScrollEnabled = true
                let repeater = setTimeout(function step() {

                    if(store._state.isScrollEnabled === false) {
                        clearTimeout(repeater)
                    } else {
                        repeater = setTimeout(step, 500);
                        console.log('step')
                    }
                }, 500);
                break
            case 'RECURSIVE_STOP':
                console.log('recursive off')
                this._state.isScrollEnabled = false
                break
            case  'SHIFT_SLOW_START' :
                this._state.slowShift = true

                this._state.shiftDirection = action.payload.shiftDirection
                let {elementNumber, windowHeight} = this._state

                let shifter = setInterval(() => {

                    if (this._state.shiftDirection === 0 ||
                        !this._state.slowShift ||
                        this._state.shift === 0 && this._state.shiftDirection < 0 ||
                        (this._state.shift === (elementNumber - windowHeight) && this._state.shiftDirection > 0)
                    ) {
                        clearInterval(shifter)
                        return
                    }

                    const newState = this._state.shift + action.payload.shiftDirection
                    this._state.shift = newState
                    const listPosition = 48 - newState * 24
                    container.style.top = `${listPosition}px`
                }, 200)
                break
            case  'SHIFT_SLOW_STOP' :
                this._state.slowShift = false
                // this._state.shiftDirection = 0
                break
            case  'SHIFT_QUICK_START' :


                container.style.setProperty('--element-container-height', '12px')

                this._state.quickShift = true
                elementNumber = this._state.elementNumber
                windowHeight = this._state.windowHeight

                this._state.shiftDirection = action.payload.shiftDirection

                let shifterQuick = setInterval(() => {
                    console.log(this._state.shift)
                    if (this._state.shiftDirection === 0 ||
                        !this._state.quickShift ||
                        this._state.shift === 0 && this._state.shiftDirection < 0 ||
                        (this._state.shift >= (elementNumber - windowHeight * 2) && this._state.shiftDirection > 0)
                    ) {
                        clearInterval(shifterQuick)
                        return
                    }

                    const newState = this._state.shift + action.payload.shiftDirection
                    this._state.shift = newState
                    const listPosition = 48 - newState * 12
                    container.style.top = `${listPosition}px`
                }, 50)

                break
            case  'SHIFT_QUICK_STOP' :
                container.style.setProperty('--element-container-height', '24px')

                this._state.quickShift = false
                // this._state.shiftDirection = 0
                break
            default:
                console.log('default actions')
        }
    }
}
