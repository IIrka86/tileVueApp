import Vue from 'vue'
import Vuex from 'vuex'
import application from './modules/applcation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    application
  }
})
