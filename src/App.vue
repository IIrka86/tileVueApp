<template>
  <div id="app">
    <component v-bind:is='application.mainContainer'></component>
  </div>
</template>

<script>
import { eventBus } from './main'
import { COMPONENTS } from './js/Utils/Constants'
import LoginForm from './components/main-container/LoginForm.vue'
import MainContainer from './components/main-container/MainContainer.vue'

import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    'app-login-form': LoginForm,
    'app-main-container': MainContainer
  },
  computed: mapGetters(['application']),
  methods: mapMutations(['setMainContainer']),
  created () {
    eventBus.$on('login', () => {
      const elem = document.getElementsByTagName('main')[0]
      elem.style.backgroundColor = '#e0f7fa'
      this.application.authorized = !this.application.authorized
      this.setMainContainer(this.application.authorized ? COMPONENTS.MAIN_CONTAINER : COMPONENTS.LOGIN_FORM)
    })
  }
}

</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
</style>
