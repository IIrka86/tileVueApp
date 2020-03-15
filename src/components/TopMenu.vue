<template>
  <ul>
    <li v-for='(item,index) in getCategories'
        :key="item"
        :id="item"
        :class="{'active':activeIndex === index }"
        v-on:click="activeIndex=index"
    >{{item}}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: [
    'userRole'
  ],
  components: {},
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: mapGetters(['getCategories'])
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
    font-size: 20px;
    transition: font-weight .5s, font-size .5s;
  }
</style>
