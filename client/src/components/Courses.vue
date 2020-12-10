<template>
  <div>
    <div class="create-course">
      <div class="text">
        <div id="first-label">Есть чем поделиться?</div>
        <div id="second-label">Создай свой курс!</div>
      </div>
      <router-link tag="button" :to="'/create-course'">Создать</router-link>
    </div>
    <div class="courses">
      <CoursePreview class="course" v-for="course in courses" :key="course._id" :id="course._id" :title="course.title"/>
    </div>
  </div>
</template>

<script>
import CoursePreview from "@/components/CoursePreview";
import CoursesService from "@/services/CoursesService";

export default {
  name: "Courses",
  components: {CoursePreview},
  data: () => ({
    courses: []
  }),
  mounted () {
    this.getCourses()
  },
  methods: {
    async getCourses() {
      const response = await CoursesService.getCourses()
      this.courses = response.data.courses
    }
  }
}
</script>

<style scoped>
.create-course {
  margin-top: 154px;
  margin-left: 83px;
  margin-right: 115px;
}

.text {
  width: max-content;
}

#first-label {
  font-weight: bold;
  font-size: 48px;
  line-height: 109.68%;
  color: #FF7200;
}

#second-label {
  font-weight: 600;
  font-size: 40px;
  line-height: 109.68%;
  color: rgba(33, 48, 103, 0.81);
  margin-top: 13px;
}

button {
  float: right;
  margin-top: -77.5px;
  outline: none;
  border: none;
  border-radius: 30px;
  width: 160px;
  height: 50px;
  background: #FF9138;
  font-weight: bold;
  font-size: 22px;
  line-height: 109.68%;
  text-align: center;
  color: #FFFFFF;
}

.courses {
  margin-top: 151px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}

.course {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  align-items: center;
}
</style>