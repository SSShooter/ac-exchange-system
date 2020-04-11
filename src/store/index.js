import Vue from 'vue'
import Vuex from 'vuex'
import { getMyInfo } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, payload) {
      state.info = payload
    }
  },
  actions: {
    async fetchInfo(context) {
      const res = await getMyInfo()
      context.commit('setInfo', res.data)
    }
  },
})
