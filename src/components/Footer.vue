<template>
  <footer class="<blockquote-footer">
    <div class="footer-container">
      <p v-on:click='login'>&copy; KAVALIOVA</p>
    </div>
  </footer>
</template>

<script>
import { eventBus } from '../main'

export default {

  methods: {
    login: function () {
      eventBus.$emit('login', 'admin')
    }
  }
}

</script>

<style scoped>
  footer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    background-color: #333333;
    width: 100%;
    bottom: 0;

    color: #fff;
  }

  p {
    margin-bottom: 0;
    font-size: 20px;
  }
</style>
