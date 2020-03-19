<template>
  <header>
    <app-navbar v-show="application.authorized"></app-navbar>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './Navbar'

export default {
  components: {
    'app-navbar': Navbar
  },
  computed: mapGetters(['application'])
}
</script>

<style scoped>
  header {
    z-index: 100;
  }
</style>
