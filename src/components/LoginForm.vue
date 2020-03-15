<template>
  <div id="login-form">
    <div class="form-container">
      <form @submit.prevent="submit">
        <div class="form-group row">
          <div class="col-sm-12">
            <h1>{{title}}</h1>
          </div>
        </div>
        <div class="form-group row">
          <label for="login" class="col-sm-3 col-form-label">Логин</label>
          <div class="col-sm-9">
            <input id="login" name="login" class="form-control" type="text" placeholder="Логин" v-model="userRole">
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-3 col-form-label">Пароль</label>
          <div class="col-sm-9">
            <input id="password" name="password" class="form-control" type="password" placeholder="Пароль">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12">
            <input id="login-btn" type="submit" value="Войти" class="btn btn-block">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12">
            <p v-if="error">{{errorMessage}}</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main'
import { mapMutations, mapActions } from 'vuex'

export default {
  components: {},
  data () {
    return {
      userRole: '',
      title: 'Плитка в Вилейке',
      error: true,
      errorMessage: 'Uncorrect password or login'
    }
  },
  methods: {
    ...mapMutations(['updateUserRole']),
    ...mapActions(['initMenuItems']),
    submit () {
      this.updateUserRole(this.userRole)
      this.initMenuItems(this.userRole)
      this.login()
    },
    login: function () {
      eventBus.$emit('login')
    }
  }
}

</script>

<style scoped>
  #login-form {

    position: fixed;
    width: 100%;
    min-height: 100%;
    padding-top: 250px;
    padding-left: 40%;
    padding-right: 40%;
    background-color: #7952b3;
  }

  h1 {
    color: white;
    text-align: center;
  }

  p {
    color: red;
    text-align: center;
    font-size: 26px
  }

  label {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }

  #login-btn {
    background-color: #333333;
    color: white;
    font-size: 25px;
  }
</style>
