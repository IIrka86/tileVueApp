import { locale } from '../../main'
import { USER, CATEGORY, LAYOUT } from '../../js/Utils/Constants'

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
            CATEGORY.ORDERS,
            CATEGORY.REPORTS,
            CATEGORY.CALENDAR,
            CATEGORY.FACTORIES,
            CATEGORY.PROVIDERS,
            CATEGORY.STOCK
          ])
          break
        }
        case USER.ROLE.DIRECTOR: {
          context.commit('setCategories', [
            CATEGORY.ORDERS,
            CATEGORY.REPORTS,
            CATEGORY.CALENDAR,
            CATEGORY.STOCK
          ])
          break
        }
        case USER.ROLE.VENDOR: {
          context.commit('setCategories', [
            CATEGORY.REPORTS,
            CATEGORY.CALENDAR,
            CATEGORY.STOCK
          ])
          break
        }
        default:
          break
      }
    }
  },
  getters: {
    application: (state) => state.application,
    categoryByIndex: (state) => (index) => state.application.userSettings.categories[index],
    getMenuItems (state) {
      return state.application.userSettings.categories.map(category => {
        return locale[category]
      })
    },
    getLayouts (state) {
      console.log(state.application.userSettings.categories[0])
      return state.application.userSettings.categories.map(category => {
        switch (category) {
          case CATEGORY.CALENDAR:
            return { category: category, layout: LAYOUT.TABLE }
          case CATEGORY.FACTORIES:
            return { category: category, layout: LAYOUT.TABLE }
          case CATEGORY.PROVIDERS:
            return { category: category, layout: LAYOUT.TABLE }
          case CATEGORY.ORDERS:
            return { category: category, layout: LAYOUT.LEFT_MENU }
          case CATEGORY.REPORTS:
            return { category: category, layout: LAYOUT.LEFT_MENU }
          case CATEGORY.STOCK:
            return { category: category, layout: LAYOUT.TABLE }
        }
      })
    }
  }
}
