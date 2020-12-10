<template>
  <div>
    <div id="name">{{ test.title }} (Автор: {{ test.author }})</div>
    <form @submit.prevent="getResult">
      <div id="questions">
        <Question class="question" v-for="(question, index) in test.test" :key="index" :question="question" @answer-selected="setAnswer(index, $event)"/>
      </div>
      <input type="submit" value="Сдать тест">
    </form>
  </div>
</template>

<script>
import Question from "@/components/Question";
import CoursesService from "@/services/CoursesService";

export default {
  name: "Test",
  components: {Question},
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    test: [],
    selectedAnswers: []
  }),
  mounted() {
    this.getTest()
  },
  methods: {
    async getTest() {
      const response = await CoursesService.getTest(this.id)
      this.test = response.data.test
    },
    setAnswer(id, answer) {
      this.selectedAnswers[id] = answer
    },
    getResult() {
      let result = 0
      for (const index of this.selectedAnswers.keys()) {
        if (this.selectedAnswers[index] === this.test.test[index].correctAnswer) {
          result++
        }
      }
      this.$swal('Ваш результат: ' + result + '/' + this.selectedAnswers.length)
    }
  }
}
</script>

<style scoped>
#name {
  margin-top: 149px;
  margin-left: 115px;
  font-weight: bold;
  font-size: 48px;
  line-height: 109.68%;
  color: #FF7200;
}

#questions {
  margin-top: 95px;
}

.question {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}

input[type=submit] {
  display: block;
  outline: none;
  border: none;
  width: 240px;
  height: 40px;
  margin: 43px auto 179px;
  background: #FF9036;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  line-height: 109.68%;
  text-align: center;
  color: #FFFFFF;
}
</style>