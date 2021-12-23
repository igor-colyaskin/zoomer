export const store = {
    _state: {
        shift: 16,
        currentHighElement: 0,
        windowHeight: 140,
        elementHeight: 2,
        elementNubmer: 100,
    },
    getState() {
        return this._state
    },
    //
    // dispatch(action) {
    //   this._state.common = commonReducer(this._state.common, action, this)
    //   this._state.aboutPage = aboutPageReducer(this._state.aboutPage, action)
    // }
}
