<template>
  <ul>
    <li v-for='(item,index) in menuItems'
        :key="item"
        :id="item"
        :class="{'active': activeCategoryIndex === index }"
        @click="setActiveCategory(index, categoryByIndex(index))">{{item}}</li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: mapGetters([
    'menuItems',
    'categoryByIndex',
    'activeCategoryIndex'
  ]),
  methods: mapMutations(['setActiveCategory'])
}
</script>

<style scoped>
  ul {
    position: fixed;
    top: 35px;
    right: 30px;
    text-align: right;
    display: flex;
    flex-direction: row;
    min-height: 35px;
  }

  ul li {
    margin-top: auto;
    display: inline-block;
    padding: 0 15px;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    transition: color .25s, padding .25s;
  }

  ul li:hover,
  ul li.active {
    font-weight: bold;
    transition: font-weight .35s;
  }
</style>
