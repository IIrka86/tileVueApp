export default {
  state: {
    active: {
      category: '',
      index: 0
    }
  },
  mutations: {
    updateActive: (state, index, category) => {
      state.active.index = index
      state.active.category = category
    }
  },
  actions: {},
  getters: {
    activeIndex: (state) => state.active.index,
    activeCategory: (state) => state.active.category
  }
}
