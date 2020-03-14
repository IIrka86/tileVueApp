<template>
  <div id="app">
    <container v-bind:is='mainContainer'
               v-bind:userRole="application.userSettings.userRole"></container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { eventBus } from './main'
import LoginForm from './components/LoginForm.vue'
import MainContainer from './components/MainContainer.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'app-login-form': LoginForm,
    'app-main-container': MainContainer,
    'app-footer': Footer
  },
  data () {
    return {
      application: {
        authorized: false,
        userSettings: {
          userRole: 'admin'
        }
      },
      loggedIn: false,
      mainContainer: 'app-login-form'
    }
  },
  created () {
    eventBus.$on('login', () => {
      this.loggedIn = !this.loggedIn
      if (this.loggedIn) {
        this.mainContainer = 'app-main-container'
        this.application.authorized = true
      } else {
        this.mainContainer = 'app-login-form'
        this.application.authorized = false
      }
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
