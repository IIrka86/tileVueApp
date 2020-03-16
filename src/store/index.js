import Vue from 'vue'
import Vuex from 'vuex'
import application from './modules/applcation'
import mainContainer from './modules/mainContainer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    application,
    mainContainer
  }
})
