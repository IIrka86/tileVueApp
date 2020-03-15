import { locale } from '../../main'
import { USER } from '../../js/Utils/Constants'
import { LocaleKey } from '../../js/Utils/LocaleKey'

export default {
  state: {
    application: {
      authorized: false,
      userSettings: {
        userRole: 'admin',
        categories: []
      }
    }
  },
  mutations: {
    updateUserRole (state, userRole) {
      state.application.userSettings.userRole = userRole
    },
    setCategories (state, categories) {
      state.application.userSettings.categories = categories
    }

  },
  actions: {

    initMenuItems (context, userRole) {
      context.dispatch('getUserCategories', userRole)
    },
    getUserCategories (context, userRole) {
      switch (userRole) {
        case USER.ROLE.ADMIN: {
          context.commit('setCategories', [
            locale[LocaleKey.ORDERS],
            locale[LocaleKey.REPORTS],
            locale[LocaleKey.CALENDAR],
            locale[LocaleKey.FACTORIES],
            locale[LocaleKey.PROVIDERS],
            locale[LocaleKey.STOCK]
          ])
          break
        }
        case USER.ROLE.DIRECTOR: {
          context.commit('setCategories', [
            locale[LocaleKey.ORDERS],
            locale[LocaleKey.REPORTS],
            locale[LocaleKey.CALENDAR],
            locale[LocaleKey.STOCK]
          ])
          break
        }
        case USER.ROLE.VENDOR: {
          context.commit('setCategories', [
            locale[LocaleKey.ORDERS],
            locale[LocaleKey.CALENDAR],
            locale[LocaleKey.STOCK]
          ])
          break
        }
        default:
          break
      }
    }
  },
  getters: {
    application (state) {
      return state.application
    },
    getCategories (state) {
      return state.application.userSettings.categories
    }
  }
}
