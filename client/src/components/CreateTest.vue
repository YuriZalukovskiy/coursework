<template>
  <div>
    <div id="label1">Создание теста</div>
    <div id="label2">Создайте 10 контрольных вопросов к курсу</div>
    <form @submit.prevent="createCourse">
      <div id="test">
        <CreateQuestion class="question" v-for="index in Array(10).keys()" :key="index" :number="index + 1"
                        v-model="test[index]" @input-question="setTest(index, $event)"/>
      </div>
      <input type="submit" value="Создать">
    </form>
  </div>
</template>

<script>
import CreateQuestion from "@/components/CreateQuestion";
import CoursesService from "@/services/CoursesService";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "CreateTest",
  components: {CreateQuestion},
  props: {
    title: {
      type: String,
      required: true
    },
    video: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data: () => ({
    test: [],
  }),
  computed: mapGetters(['user']),
  methods: {
    async createCourse() {
      try {
        let course = {
          title: this.title,
          video: this.video,
          description: this.description,
          test: this.test,
          author: this.user.nickname
        }
        let response = await CoursesService.createCourse(course)
        this.$swal(
          'Курс добавлен',
          '',
          'success'
        )
        await this.$router.push({name: 'course', params: {id: response.data.id}})
      } catch (e) {
        console.log(e.response.data)
      }
    },
    setTest(id, question) {
      this.test[id] = question
    },
    ...mapActions(['getProfile'])
  },
  mounted() {
    this.getProfile()
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
  margin-left: 100px;
  margin-right: 100px;
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
  line-height: 68.18%;
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

#test {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.question {
  display: block;
  margin-top: 60px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>