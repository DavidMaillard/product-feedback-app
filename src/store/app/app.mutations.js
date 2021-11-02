export default {
  setNetworkOnline: (state, value) => (state.networkOnLine = value),
  setSWRegistrationForNewContent: (state, value) =>
    (state.SWRegistrationForNewContent = value),
  setShowAddToHomeScreenModalForApple: (state, value) =>
    (state.showAddToHomeScreenModalForApple = value),
  setRefreshingApp: (state, value) => (state.refreshingApp = value),
  setScore: (state) => {
    state.score = parseInt(parseInt(state.score, 10) + 1, 10)
    localStorage.setItem('rock-paper-scissor-score', state.score)
  }
}
