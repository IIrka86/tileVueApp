<template>
  <div id="app">
    <container v-bind:is='application.mainContainer'></container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { eventBus } from './main'
import { COMPONENTS } from './js/Utils/Constants'
import LoginForm from './components/LoginForm.vue'
import MainContainer from './components/MainContainer.vue'
import Footer from './components/Footer.vue'

import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    'app-login-form': LoginForm,
    'app-main-container': MainContainer,
    'app-footer': Footer
  },
  computed: mapGetters(['application']),
  methods: mapMutations(['setMainContainer']),
  created () {
    eventBus.$on('login', () => {
      this.application.authorized = !this.application.authorized
      this.setMainContainer(this.application.authorized ? COMPONENTS.MAIN_CONTAINER : COMPONENTS.LOGIN_FORM)
    })
  }
}

</script>

<style scoped>
  #app {
    position: relative;
    min-height: 100%;
  }
</style>
