import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '6d1ede3f-1464-4ebd-8729-5b9d4ae7e7fa'
  }
})

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
      .then(response => {
        return response.data;
      })
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  },
  getProfile(userId) {
    console.warn('Obselete method. Please use profileAPI object')
    return profileAPI.getProfile(userId)
  }
}
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status })
  },
  savePhoto(photo) {
    const formData = new FormData;
    formData.append('image', photo)
    return instance.put(`profile/photo/`, formData
    )
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login({ email, password, rememberMe = false }) {
    return instance.post(`auth/login/`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login/`)
  },
  captchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
}