
const store = {
  _state: {
    common: {
      theme: 'light',
      currentPage: 'home',
    },
    aboutPage: {
      messages: [],
      newInputText: ''
    }
  },
  getState() { return this._state },
  //
  // dispatch(action) {
  //   this._state.common = commonReducer(this._state.common, action, this)
  //   this._state.aboutPage = aboutPageReducer(this._state.aboutPage, action)
  // }
}
export default store