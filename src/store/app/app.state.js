export default {
  appTitle: process.env.VUE_APP_TITLE,
  appShortTitle: process.env.VUE_APP_SHORT_TITLE,
  networkOnLine: true,
  SWRegistrationForNewContent: null,
  showAddToHomeScreenModalForApple: false,
  refreshingApp: false,
  score: localStorage.getItem('rock-paper-scissor-score') ?? 0
}
