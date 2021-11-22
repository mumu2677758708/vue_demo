import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from "vuex-persistedstate";
Vue.use(Vuex)
import {
  asyncCategory
} from '../service/list'
export default new Vuex.Store({
  plugins: [persistedState()],
  state: {
    category: {}
  },
  getters: {},
  mutations: {
    updateCategory(state, data) {
      state.category = data
      console.log(state.category)
    }
  },
  actions: {
    async asyncCategory({
      commit
    }, {
      targetGroupId = ''
    }) {
      const {
        data
      } = await asyncCategory({
        targetGroupId
      })
      if (data) {
        commit('updateCategory', data)
      }
    }
  }
})