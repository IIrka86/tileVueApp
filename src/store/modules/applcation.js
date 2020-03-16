import { locale } from '../../main'
import { APPLICATION, COMPONENTS } from '../../js/Utils/Constants'

export default {
  state: {
    application: {
      authorized: false,
      userRole: '',
      title: APPLICATION.TITLE,
      login: APPLICATION.LOGIN,
      password: APPLICATION.PASSWORD,
      mainContainer: COMPONENTS.LOGIN_FORM
    }
  },

  getters: {
    application: (state) => state.application,
    mainContainer: (state) => state.application.mainContainer,
    titleKey: (state) => locale[state.application.title],
    userRoleTitle: (state) => locale[state.application.userRole],
    loginKey: (state) => locale[state.application.login],
    passwordKey: (state) => locale[state.application.password]
  },

  mutations: {
    updateUserRole (state, userRole) {
      state.application.userRole = userRole
    },
    setMainContainer (state, mainContainer) {
      state.application.mainContainer = mainContainer
    }
  },

  actions: {

  }
}
