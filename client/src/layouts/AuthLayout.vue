<template>
  <div>
    <router-link tag="div" :to="'/'">
      <img alt="logo" id="logo" src="@/assets/logo.png">
    </router-link>
    <div id="rectangle">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout"
}
</script>

<style scoped>
#logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 9px;
  width: 93px;
  height: 90px;
}

#rectangle {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 435px;
  height: 483px;
  background: rgba(39, 51, 160, 0.33);
}
</style>