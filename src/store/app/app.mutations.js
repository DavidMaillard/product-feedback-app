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
  },
  replyToComment: (state, value) => {
    const comment = state.productRequests.find(el => el.id === value.feedbackId).comments.find(el => el.id === value.commentId)

    if (typeof(comment.replies) === "undefined") {
      comment.replies = [value.reply]
    } else {
      comment.replies.push(value.reply)
    }
  },
  addComment: (state, value) => {
    const feedback = state.productRequests.find(el => el.id === value.feedbackId)

    if (typeof(feedback.comments) === "undefined") {
      feedback.comments = [value.comment]
    } else {
      feedback.comments.push(value.comment)
    }
  }
}
