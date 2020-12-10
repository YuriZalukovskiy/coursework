<template>
  <div>
    <div id="login-label">Вход</div>
    <form @submit.prevent="loginUser">
      <input type="text" name="email" placeholder="E-mail" v-model="email" required>
      <input type="password" name="password" placeholder="Пароль" v-model="password" required>
      <input id="button" type="submit" value="Войти">
    </form>
    <router-link tag="div" to="">
      <router-link tag="div" :to="'/registration'" id="label">Ещё нет аккаунта?</router-link>
    </router-link>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "Login",
  data: () => ({
    email: '',
    password: '',
    user: {}
  }),
  methods: {
    ...mapActions(['login']),
    async loginUser() {
      try {
        let user = {
          email: this.email,
          password: this.password
        }
        await this.login(user).then(res => {
          if (res.data.success) {
            this.$swal(
              'Авторизация прошла успешно',
              '',
              'success'
            )
            this.$router.push('/')
          }
        })
      } catch {
        this.$swal(
          'Почта или пароль введены неверно',
          '',
          'error'
        )
      }
    }
  }
}
</script>

<style scoped>
#login-label {
  padding-left: 70px;
  padding-top: 60px;
  font-weight: 900;
  font-size: 42px;
  line-height: 68.18%;
  letter-spacing: -0.01em;
  color: #FFFFFF;
}

form {
  margin-top: 40px;
}

input {
  display: block;
  outline: none;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7px;
  padding: 0 0 0 4px;
  width: 285px;
  height: 37px;
  background: rgba(255, 255, 255, 0.5);
}

::placeholder {
  font-weight: 450;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #A6A6A6;
}

#button {
  background: #FFAA67;
  margin-top: 132px;
  color: #FFFFFF;
}

#label {
  margin-left: 160px;
  font-size: 15px;
  margin-top: 22px;
  font-weight: 450;
  line-height: 68.18%;
  text-align: center;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.75);
}
</style>