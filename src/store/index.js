import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    email: null
  },
  mutations: {
    logIn(state, email) {
      state.loggedIn = true
      state.email = email
    },

    logOut(state) {
      console.log("hi")
      state.loggedIn = false
      state.email = null
    }
  },
  actions: {
  },
  modules: {
  }
})
