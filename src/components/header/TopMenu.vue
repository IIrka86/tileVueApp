<template>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li v-for='(item,index) in menuItems'
        :key="item"
        :id="item"
        :class="{'active': activeCategoryIndex === index }"
        @click="setActiveCategory(index)"><a href="#">{{item}}</a></li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: mapGetters([
    'menuItems',
    'activeCategoryIndex'
  ]),
  methods: mapMutations(['setActiveCategory'])
}
</script>
