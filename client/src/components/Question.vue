<template>
  <div id="question">
    <div id="name">{{ question.question }}</div>
    <div id="answer" v-for="(answer, index) in question.answers" :key="index">
      <input type="radio" :name="question._id" :value="answer" :id="'answer' + question._id + '_' + index" @input="$emit('answer-selected', answer)" required>
      <label :for="'answer' + question._id + '_' + index">{{ answer }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
#question {
  display: block;
  width: 830px;
  height: 220px;
  background: rgba(153, 145, 255, 0.06);
}

#name {
  padding-top: 17px;
  margin-left: 79px;
  margin-bottom: 53px;
  font-weight: 600;
  font-size: 22px;
  line-height: 119.18%;
  color: #FF7200;
}

input[type=radio] {
  margin-left: 110px;
  margin-right: 7px;
  width: 10px;
  height: 10px;
  background: #FFFFFF;
  border: 1px solid #7B7B7B;
  box-sizing: border-box;
}

#answer {
  margin-top: 10px;
}

label {
  font-weight: normal;
  font-size: 16px;
  line-height: 109.68%;
  color: rgba(100, 103, 130, 0.7);
}
</style>