import { createStore } from 'vuex'
import { navLinks } from './navLinks'

export const store = createStore({
  state: {
    data: null
  },
  mutations: {
    CHANGE_DATA(state, payload) {
      state.data = payload
    }
  },
  actions: {
    changeData({ commit }, payload) {
      commit('CHANGE_DATA', payload)
    }
  },
  getters: {
    data(state) {
      return state.data === null ? 'null' : state.data
    }
  },
  modules: {
    navLinks
  }
})
