import './css/main.css'
import './css/bootstrap.min.css'

import './js/Utils/Constants'
import './js/Utils/LocaleKey'
import './js/UserSetting'

import LocaleRu from './libs/json/LocaleRu.json'

import Vue from 'vue'
import App from './App.vue'
// import * as uiv from 'uiv'
import { Application } from './js/Application'

export const eventBus = new Vue()

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})

export const application = new Application()
application.start()

// console.log(LocaleRu);
export const localeRu = LocaleRu
