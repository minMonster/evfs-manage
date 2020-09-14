import Vue from 'vue'
import Vuex from 'vuex'
import a from '@/store/a'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: '' // 文件路径
  },
  mutations: {
    changePath (state, path) {
      state.path = path
    }
  },
  actions: {
  },
  modules: {
    // test moudle
    a
  }
})
