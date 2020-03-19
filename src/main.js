import './css/main.css'
import 'materialize-css/dist/js/materialize.min'

import './js/Utils/Constants'
import './js/Utils/LocaleKey'

import LocaleRu from './libs/json/LocaleRu.json'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Footer from './components/Footer'
import Header from './components/header/Header'
// import * as uiv from 'uiv'

export const eventBus = new Vue()
export const locale = LocaleRu

new Vue({ // eslint-disable-line no-new
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({ // eslint-disable-line no-new
  store,
  render: h => h(Header)
}).$mount('#header')

new Vue({ // eslint-disable-line no-new
  render: h => h(Footer)
}).$mount('#footer')
