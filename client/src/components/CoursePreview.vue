<template>
  <div id="preview">
    <div id="name">{{ title }}</div>
    <router-link tag="button" :to="{name: 'course', params: {id: id}}">Перейти</router-link>
  </div>
</template>

<script>
export default {
  name: "CoursePreview",
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#preview {
  width: 350px;
  height: 175px;
  background: rgba(60, 69, 152, 0.76);
}

#name {
  font-weight: bold;
  font-size: 24px;
  line-height: 109.68%;
  padding-top: 32px;
  text-align: center;
  color: #FFFFFF;
}

button {
  outline: none;
  border: none;
  border-radius: 30px;
  width: 130px;
  height: 30px;
  background: #FF9138;
  margin-top: 21px;
  font-weight: bold;
  font-size: 16px;
  line-height: 109.68%;
  color: #FFFFFF;
}
</style>