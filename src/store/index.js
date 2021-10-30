import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pepole: 'pepole',
    user: null,
    uid: null,
    cookie: null
  },
  mutations: {
    setPepole (state, pepole) {
      state.pepole = pepole
      localStorage.setItem('pepole', pepole)
    },
    /** 保存用户信息 */
    addUser (state, obj) {
      state.user = obj
      state.uid = state.user.profile.userId
      state.cookie = obj.cookie
    }
  },
  actions: {
  },
  modules: {
  }
})
