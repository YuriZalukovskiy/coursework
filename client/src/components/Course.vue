<template>
  <div>
    <router-link tag="button" id="back" :to="{name: 'courses'}">Обратно к курсам</router-link>
    <div id="name">{{ course.title }} (Автор: {{ course.author }})</div>
    <div id="video">
      <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + course.video" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>
    <div id="description">{{ course.description }}</div>
    <div id="test">
      <router-link tag="button" :to="{name: 'test', id: id}">Пройти тест</router-link>
    </div>
  </div>
</template>

<script>
import CoursesService from "@/services/CoursesService";

export default {
  name: "Course",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    course: {}
  }),
  mounted() {
    this.getCourse()
  },
  methods: {
    async getCourse() {
      const response = await CoursesService.getCourse(this.id)
      this.course = response.data.course
    }
  }
}
</script>

<style scoped>
button {
  outline: none;
  border: none;
  width: 160px;
  height: 40px;
  background: #FF9036;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  line-height: 109.68%;
  color: #FFFFFF;
}

#back {
  margin-top: 132px;
  margin-left: 115px;
}

#name {
  margin-top: 46px;
  font-weight: bold;
  font-size: 34px;
  line-height: 109.68%;
  text-align: center;
  color: #EA6800;
}

#video {
  margin-top: 52px;
  text-align: center;
}

#description {
  margin-top: 52px;
  margin-left: 115px;
  margin-right: 115px;
  font-weight: normal;
  font-size: 15px;
  line-height: 109.68%;
  color: #343434;
}

#test {
  text-align: right;
  margin-top: 60px;
  margin-right: 115px;
  margin-bottom: 252px;
}
</style>