<template>
  <ul>
    <li v-for='(item,index) in menuItems'
        :key="item"
        :id="item"
        :class="{'active':activeIndex === index }"
        v-on:click="activeIndex=index"
    >{{item}}
    </li>
  </ul>
</template>

<script>
import { localeRu } from '../main'
import { USER } from '../js/Utils/Constants'
import { LocaleKey } from '../js/Utils/LocaleKey'

export default {
  props: [
    'userRole'
  ],
  components: {},
  data () {
    return {
      menuItems: [],
      locale: localeRu,
      activeIndex: 0
    }
  },
  created: function () {
    this.initMenu(this.userRole)
    // this.createMainContainerViews()
  },
  methods: {
    initMenu: function (userRole) {
      this.menuItems = this.getMenuItems(userRole)
    },
    getMenuItems: function (userRole) {
      switch (userRole) {
        case USER.ROLE.ADMIN: {
          return [
            this.locale[LocaleKey.ORDERS],
            this.locale[LocaleKey.REPORTS],
            this.locale[LocaleKey.CALENDAR],
            this.locale[LocaleKey.FACTORIES],
            this.locale[LocaleKey.PROVIDERS],
            this.locale[LocaleKey.STOCK]
          ]
        }
        case USER.ROLE.DIRECTOR: {
          return [
            this.locale[LocaleKey.ORDERS],
            this.locale[LocaleKey.REPORTS],
            this.locale[LocaleKey.CALENDAR],
            this.locale[LocaleKey.STOCK]
          ]
        }
        case USER.ROLE.VENDOR: {
          return [
            this.locale[LocaleKey.ORDERS],
            this.locale[LocaleKey.CALENDAR],
            this.locale[LocaleKey.STOCK]
          ]
        }
        default:
          break
      }
    }
  },
  setActive: function (index) {
    this.activeIndex = index
  },
  createMainContainerViews: function () {

  }
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
