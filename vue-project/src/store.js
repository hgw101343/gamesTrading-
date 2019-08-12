import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alllists: [],
    phone: "",
    password: "",
    //存链接
    url: ""
  },
  getters: {
    // doneTodos: state => {
    //   return statealllists;
    // }
  },
  mutations: {

  },
  actions: {

  }
})
