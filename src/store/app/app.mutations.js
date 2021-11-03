export default {
  setNetworkOnline: (state, value) => (state.networkOnLine = value),
  setSWRegistrationForNewContent: (state, value) =>
    (state.SWRegistrationForNewContent = value),
  setShowAddToHomeScreenModalForApple: (state, value) =>
    (state.showAddToHomeScreenModalForApple = value),
  setRefreshingApp: (state, value) => (state.refreshingApp = value),
  addFeedback: (state, value) => (state.productRequests.push(value)),
  editFeedback: (state, value) => {
    const index = state.productRequests.findIndex((el => el.id === value.id))

    state.productRequests[index] = value
  },
  deleteFeedback: (state, value) => {
    state.productRequests = state.productRequests.filter(el => el.id !== value)
  }
}
