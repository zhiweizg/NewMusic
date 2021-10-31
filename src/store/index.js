import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    /** 保存用户信息 */
    addUser (state, obj) {
      state.user = obj
      localStorage.setItem('user', JSON.stringify(obj))
    }
  },
  getters: {
    getAvatar (state) {
      let avatar = ''
      if (localStorage.getItem('avatar')) {
        return localStorage.getItem('avatar')
      }
      avatar = state.user && state.user.profile.avatarUrl
      return avatar
    },
    getUserId (state) {
      if (localStorage.getItem('uid')) {
        return localStorage.getItem('uid')
      }
      return state.user.profile.uid
    },
    getCookie (state) {
      return state.user.cookie
    },
    getNickname (state) {
      if (localStorage.getItem('nickname')) {
        return localStorage.getItem('nickname')
      }
      return state.user.profile.nickname
    }
  },
  actions: {
  },
  modules: {
  }
})
