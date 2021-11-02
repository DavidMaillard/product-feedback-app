import data from '@/data.json'

export default {
  appTitle: process.env.VUE_APP_TITLE,
  appShortTitle: process.env.VUE_APP_SHORT_TITLE,
  networkOnLine: true,
  SWRegistrationForNewContent: null,
  showAddToHomeScreenModalForApple: false,
  refreshingApp: false,
  currentUser: data.currentUser,
  productRequests: data.productRequests
}
