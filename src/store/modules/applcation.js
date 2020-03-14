export default {
  state: {
    application: {
      authorized: false,
      userSettings: {
        userRole: 'admin'
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    application (state) {
      return state.application
    }
  }
}
