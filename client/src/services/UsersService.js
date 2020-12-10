import Api from "@/services/Api";

export default {
  registerUser(userData) {
    return Api().post('/registration', userData)
  },
  loginUser(user) {
    return Api().post('/login', user)
  },
  userProfile() {
    return Api().get('/profile')
  }
}