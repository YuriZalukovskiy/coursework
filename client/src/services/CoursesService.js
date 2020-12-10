import Api from './Api'

export default {
  getCourses() {
    return Api().get('/courses')
  },
  createCourse(course) {
    return Api().post('/create-course', course)
  },
  getCourse(id) {
    return Api().get('/course/' + id)
  },
  getTest(id) {
    return Api().get('/test/' + id)
  },
  getCoursesByAuthor(author) {
    return Api().get('/courses/' + author)
  }
}
