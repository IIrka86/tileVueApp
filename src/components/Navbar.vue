<template>
  <div class="header-container">
    <div class="title">
      <h1>{{titleKey}}</h1>
      <h2>{{userRoleTitle}}</h2>
    </div>
    <div class="menu-items">
      <top-menu></top-menu>
    </div>
  </div>
</template>

<script>
import TopMenu from './TopMenu.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'top-menu': TopMenu
  },
  computed: mapGetters(['titleKey', 'userRoleTitle'])
}
</script>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background: #7952b3;
    padding: 0 20px;
  }

  h1, h2 {
    color: white;
    text-align: left;
  }
</style>
