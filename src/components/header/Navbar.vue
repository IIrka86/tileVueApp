<template>
  <nav>
    <div class="nav-wrapper">
      <a class="brand-logo">{{userRoleTitle}}</a>
      <top-menu></top-menu>
    </div>
  </nav>
</template>

<script>
import TopMenu from './TopMenu.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'top-menu': TopMenu
  },
  computed: mapGetters(['userRoleTitle'])
}
</script>

<style scoped>
  nav {
    background: #00838f;
  }
</style>
