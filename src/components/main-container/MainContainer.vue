<template>

    <div id="main-container">
      <component v-bind:is='getLayout'></component>
<!--      <div v-for="(item, index) in getLayouts"-->
<!--           :id="item.category"-->
<!--           :class="{'active':activeCategoryIndex === index }"-->
<!--           :key="item.category">-->
<!--        <h1>{{item.category}}</h1>-->

<!--      </div>-->
    </div>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import LeftMenuLayout from './layouts/left-menu/LeftMenuLayout'
import TableLayout from './layouts/table/TableLayout'

export default {
  components: {
    'left-menu-layout': LeftMenuLayout,
    'table-layout': TableLayout
  },
  computed: mapGetters([
    'getLayout'
  ]),
  methods: {
    ...mapMutations(['setActiveCategory'])
  },
  beforeMount () {
    this.setActiveCategory(0)
  }
}

</script>

<style scoped>
  #main-container {
    height: 300px;
  }

</style>
