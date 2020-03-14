<template>
  <header>
    <div class="header-container">
      <div class="title">
        <h1>{{title}}</h1>
        <h2 v-on:click="getCategories('admin')">{{role}}</h2>
      </div>
      <div class="menu-items">
        <top-menu v-bind:user-role="userRole"></top-menu>
      </div>
    </div>
  </header>
</template>

<script>
import TopMenu from './TopMenu.vue'

export default {
  props: [
    'userRole'
  ],
  components: {
    'top-menu': TopMenu
  },
  data () {
    return {
      title: 'Плитка в Вилейке',
      role: 'Администратор'
    }
  },
  methods: {
    getCategories: function (role) {
      switch (role) {
        case 'admin' : {
          // return [
          //   CATEGORY.CALENDAR,
          //   CATEGORY.FACTORIES,
          //   CATEGORY.ORDERS,
          //   CATEGORY.PROVIDERS,
          //   CATEGORY.REPORTS,
          //   CATEGORY.STOCK,
          // ];
        }
      }
    }
  }
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
