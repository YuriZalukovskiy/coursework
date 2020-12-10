<template>
  <div>
    <div class="text">
      <div id="first-label">Здравствуй, {{ user.nickname }}!</div>
      <div id="second-label">Тут собраны все курсы, созданные тобой</div>
    </div>
    <div class="courses">
      <CoursePreview class="course" v-for="course in courses" :key="course._id" :id="course._id" :title="course.title"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import CoursePreview from "@/components/CoursePreview";
import CoursesService from "@/services/CoursesService";

export default {
  name: "Account",
  components: {CoursePreview},
  data: () => ({
    courses: []
  }),
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['getProfile']),
    async getCourses() {
      const response = await CoursesService.getCoursesByAuthor(this.user.nickname)
      this.courses = response.data.courses
    }
  },
  mounted() {
    this.getProfile()
    this.getCourses()
  }
}
</script>

<style scoped>
.text {
  margin-top: 154px;
  margin-left: 83px;
  margin-right: 115px;
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