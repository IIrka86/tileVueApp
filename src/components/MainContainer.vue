<template>
  <div>
    <app-header v-bind:userRole="userRole"></app-header>
    <div id="main-container">
      <div v-for="(item, index) in getLayouts"
           :id="item.category"
           :class="{'active':activeIndex === index }"
           :key="item.category">
        <p>{{item.category}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import { mapGetters, mapMutations } from 'vuex'

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
  },
  computed: mapGetters(['getLayouts', 'categoryByIndex', 'activeIndex']),
  methods: {
    ...mapMutations(['updateActive'])
  },
  beforeMount () {
    this.updateActive(0, this.categoryByIndex(0))
  }
}

</script>

<style scoped>
  #main-container {
    margin-top: 105px;
    min-height: 500px;
    height: 500px;
  }
  #main-container div{
    min-height: 200px;
    border: #1d2124 solid 2px;
    display: none;
  }
  #main-container div.active{
    display: block;
  }

</style>
