<template>
  <div>
    <div id="label1">Создание своего курса</div>
    <div id="label2">Заполните информацию про курс и его содержимое</div>
    <form @submit.prevent="nextStep">
      <input type="text" name="name" placeholder="Название курса" v-model="title" required>
      <input type="text" name="video" placeholder="Ссылка на видео в youtube (youtu.be/OlnwgS-gk8Y)" v-model="video"
             required>
      <textarea name="description" placeholder="Содержимое" v-model="description" required></textarea>
      <input type="submit" value="Перейти к созданию теста">
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateCourse",
  data: () => ({
    title: '',
    video: '',
    description: ''
  }),
  methods: {
    nextStep() {
      let videoCode = this.video.split('youtu.be/')[1]
      if (videoCode !== undefined) {
        this.$router.push({
          name: 'create-test',
          params: {title: this.title, video: videoCode, description: this.description}
        })
      } else {
        this.$swal(
          'Ошибка',
          'Введите короткую ссылку на youtube видео (например "youtu.be/OlnwgS-gk8Y")',
          'error'
        )
      }
    }
  }
}
</script>

<style scoped>
#label1 {
  font-weight: bold;
  font-size: 48px;
  line-height: 109.68%;
  color: #FF7200;
  margin-top: 148px;
  margin-left: 84px;
}

#label2 {
  font-weight: 350;
  font-size: 18px;
  line-height: 68.18%;
  letter-spacing: -0.01em;
  color: rgba(133, 135, 156, 0.8);
  margin-top: 22px;
  margin-left: 84px;
}

form {
  margin-top: 86px;
  margin-left: 115px;
  margin-right: 115px;
}

textarea {
  display: block;
  border: none;
  outline: none;
  margin-bottom: 31px;
  width: 770px;
  height: 620px;
  background: rgba(44, 54, 131, 0.2);
  padding: 28px;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: -0.01em;
  color: rgba(97, 110, 123, 0.68);
}

input {
  display: block;
  border: none;
  outline: none;
  margin-bottom: 31px;
}

input[type=text] {
  background: rgba(44, 54, 131, 0.2);
  padding-left: 28px;
  font-weight: 300;
  font-size: 18px;
  line-height: 68.18%;
  letter-spacing: -0.01em;
  color: rgba(97, 110, 123, 0.68);
}

input[name="name"] {
  width: 342px;
  height: 39px;
}

input[name="video"] {
  width: 450px;
  height: 39px;
}

input[name="description"] {
  width: 770px;
  height: 620px;
  vertical-align: top;
  resize: none;
}

::placeholder {
  color: #FFFFFF;
}

input[type=submit] {
  width: 290px;
  height: 40px;
  background: #FF9036;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  line-height: 109.68%;
  color: #FFFFFF;
  margin: 75px auto 269px;
}
</style>