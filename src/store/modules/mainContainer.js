import { CATEGORY, LAYOUT, USER } from '../../js/Utils/Constants'
import { locale } from '../../main'

export default {
  state: {
    categories: [],
    activeCategory: {
      name: '',
      index: 0
    }
  },
  mutations: {
    setActiveCategory: (state, index, category) => {
      state.activeCategory.index = index
      state.activeCategory.name = category
    },
    setCategories (state, categories) {
      state.categories = categories
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
    activeCategoryIndex: (state) => state.activeCategory.index,
    activeCategoryName: (state) => state.activeCategory.name,
    categoryByIndex: (state) => (index) => state.categories[index],
    menuItems (state) {
      return state.categories.map(category => {
        return locale[category]
      })
    },

    getLayouts (state) {
      return state.categories.map(category => {
        switch (category) {
          case CATEGORY.CALENDAR:
          case CATEGORY.FACTORIES:
          case CATEGORY.PROVIDERS:
          case CATEGORY.STOCK:
            return { category: category, layout: LAYOUT.TABLE }
          case CATEGORY.ORDERS:
          case CATEGORY.REPORTS:
            return { category: category, layout: LAYOUT.LEFT_MENU }
        }
      })
    }
  }
}
