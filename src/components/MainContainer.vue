<template>
  <div>
    <app-header v-bind:userRole="userRole"></app-header>
    <div id="main-container">
      <h1>NEW</h1>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  props: [
    'userRole'
  ],
  components: {
    'app-header': Header
  },
  data () {
    return {
      title: 'Tile App'
    }
  }
}

</script>

<style scoped>
  #main-container {
    display: none;
    min-height: 500px;
    height: 500px;
  }
</style>
