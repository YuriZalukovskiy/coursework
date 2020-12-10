<template>
  <div id="app">
    <component v-if="layout !== 'none'" :is="layout"/>
    <router-view v-else/>
  </div>
</template>

<script>
import 'normalize.css';
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: 'App',
  computed: {
    layout() {
      return this.$route.meta.layout || 'none'
    }
  },
  components: {
    MainLayout, AuthLayout
  }
}
</script>

<style>
#app {
  font-family: 'Segoi UI', Calibri, Avenir, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
}
</style>
