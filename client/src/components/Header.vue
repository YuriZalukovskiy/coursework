<template>
  <header>
    <ul>
      <router-link tag="li" :to="'/login'" v-if="!isLoggedIn">Войти в аккаунт</router-link>
      <li @click.prevent="logoutUser" v-else>Выйти из аккаунта</li>
      <router-link tag="div" :to="'/'" class="logo">
        <img src="@/assets/logo.png" id="logo"/>
        <div id="name">Teachable<br>Moment</div>
      </router-link>
      <router-link tag="li" :to="'/account'">Кабинет</router-link>
      <router-link tag="li" :to="'/courses'">Курсы</router-link>
      <router-link tag="li" :to="'/'">Главная</router-link>
      <router-link tag="li" :to="'/about-us'">О нас</router-link>
    </ul>
  </header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Header",
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout()
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  margin-top: 35px;
  font-weight: 300;
  font-size: 20px;
  line-height: 109.68%;
  color: #656565;
  margin-right: 35px;
  float: right;
}

.logo {
  float: left;
}

#logo {
  margin-top: 11px;
  margin-left: 35px;
  width: 73px;
  height: 70px;
  float: left;
}

#name {
  font-weight: normal;
  font-size: 22px;
  line-height: 86.18%;
  letter-spacing: -0.03em;
  font-feature-settings: 'liga' off;
  color: #EA6800;
  float: left;
  text-align: center;
  margin-top: 27px;
  margin-left: 0;
}
</style>