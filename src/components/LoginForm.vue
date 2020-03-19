<template>
  <div id="login-form" class="container">
    <div class="row">
      <form @submit.prevent="submit" class="col s12">
        <div class="row">
          <div class="s12">
            <h1>{{titleKey}}</h1>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="login" name="login" type="text" v-model="userRole">
            <label for="login">{{loginKey}}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" name="password" type="password">
            <label for="password">{{passwordKey}}</label>
          </div>
        </div>
        <div class="row">
          <div class="s12">
            <button class="btn waves-effect waves-light" type="submit" name="action">Войти
            </button>
          </div>
        </div>
        <div class="row">
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
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      userRole: '',
      password: '',
      error: true,
      errorMessage: 'Uncorrect password or login'
    }
  },
  computed: mapGetters(['titleKey', 'loginKey', 'passwordKey']),
  methods: {
    ...mapMutations(['updateUserRole']),
    ...mapActions(['initMenuItems']),
    submit () {
      this.updateUserRole(this.userRole)
      this.initMenuItems(this.userRole)
      eventBus.$emit('login')
    }
  }
}

</script>

<style scoped>
  #login-form {
    min-height: 100%;
    padding: 5% 20% 0 20%;
  }

  h1 {
    color: #e0f7fa;
    text-align: center;
  }

  /*p {*/
  /*  color: red;*/
  /*  text-align: center;*/
  /*  font-size: 26px*/
  /*}*/

  /*.input-field input{*/
  /*  border-bottom: 1px solid #37474f !important;*/
  /*}*/

  /*.input-field label {*/
  /*  color: #37474f;*/
  /*}*/

  /*.input-field>label.active {*/
  /*  color: #37474f;*/
  /*  font-size: 20px;*/
  /*  font-weight: 600;*/
  /*}*/

  /*#login-btn {*/
  /*  background-color: #333333;*/
  /*  color: white;*/
  /*  font-size: 25px;*/
  /*}*/
</style>
