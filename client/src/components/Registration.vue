<template>
  <div>
    <div id="registration-label">Регистрация</div>
    <form @submit.prevent="registerUser">
      <input type="text" placeholder="Имя пользователя" v-model="nickname" required>
      <input type="text" name="email" placeholder="E-mail" v-model="email" required>
      <input type="password" name="password" placeholder="Пароль" v-model="password" required>
      <input id="button" type="submit" value="Зарегистрироваться">
    </form>
    <router-link tag="div" :to="'/login'">
      <div id="label">Уже есть аккаунт?</div>
    </router-link>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";
import { mapActions } from 'vuex'

export default {
  name: "Registration",
  data: () => ({
    nickname: '',
    email: '',
    password: ''
  }),
  methods: {
    ...mapActions(['register']),
    async registerUser() {
      try {
        let user = {
          nickname: this.nickname,
          email: this.email,
          password: this.password
        }
        await this.register(user).then(res => {
          if (res.data.success) {
            this.$swal(
              'Аккаунт создан',
              '',
              'success'
            )
            this.$router.push('/login')
          }
        })
      } catch (e) {
        this.$swal(
          'Пользователь с таким никнеймом или почтой уже существует',
          '',
          'error'
        )
      }
    },
    async registerU() {
      try {
        let user = {
          nickname: this.nickname,
          email: this.email,
          password: this.password
        }
        let response = await UsersService.createUser(user)
        console.log(response)
        this.$swal(
          'Аккаунт создан',
          '',
          'success'
        )
        await this.$router.push('/')
      } catch (e) {
        console.log(e.response.data)
      }
    }
  }
}
</script>

<style scoped>
#registration-label {
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
  margin-top: 88px;
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