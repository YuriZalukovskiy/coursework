<template>
  <div>
    <input type="text" @input="$emit('input-question', question)" id="question" v-model="question.question" :placeholder="'Вопрос №' + number" required>
    <input v-for="i in Array(4).keys()" :key="i" type="text" @input="$emit('input-question', question)" class="answer" v-model="question.answers[i]" :placeholder="'Вариант ответа №' + (i + 1)" required>
    <input type="text" @input="$emit('input-question', question)" class="answer" v-model="question.correctAnswer" placeholder="Правильный ответ" required>
  </div>
</template>

<script>
export default {
  name: "CreateQuestion",
  data: () => ({
    question: {
      question: '',
      answers: [],
      correctAnswer: ''
    }
  }),
  props: {
    number: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  border: none;
  outline: none;
  padding-left: 27px;
}

#question {
  width: 342px;
  height: 35px;
  background: rgba(44, 54, 131, 0.2);
  margin-bottom: 26px;
  font-size: 18px;
  letter-spacing: -0.01em;
  color: rgba(97, 110, 123, 0.68);
}

.answer {
  width: 243px;
  height: 30px;
  background: rgba(44, 54, 131, 0.2);
  margin-top: 12px;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: rgba(97, 110, 123, 0.68);
}

#question::placeholder {
  font-weight: 300;
  font-size: 18px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
}

.answer::placeholder {
  font-weight: 300;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
}
</style>