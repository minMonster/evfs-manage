export default {
  namespaced: true,
  state: {
    name: 'aaa'
  },
  mutations: {
    change: function (state, payload) {
      state.name = payload
    }
  }
}
