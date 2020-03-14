import './css/main.css'
import './css/bootstrap.min.css'

import './js/Utils/Constants'
import './js/Utils/LocaleKey'

import LocaleRu from './libs/json/LocaleRu.json'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import * as uiv from 'uiv'

export const eventBus = new Vue()

new Vue({ // eslint-disable-line no-new
  store,
  render: h => h(App)
}).$mount('#app')

// console.log(LocaleRu);
export const localeRu = LocaleRu
