import { createStore } from 'vuex'
import { navLinks } from './navLinks'

export const store = createStore({
  state: {
    loading: false,
    data: null
  },
  mutations: {
    START_LOADING(state) {
      state.loading = true
    },
    END_LOADING(state) {
      state.loading = false
    },
    CHANGE_DATA(state, payload) {
      state.data = payload
    }
  },
  actions: {
    startLoading({ commit }) {
      commit('START_LOADING')
    },
    endLoading({ commit }) {
      commit('END_LOADING')
    },
    changeData({ commit }, payload) {
      commit('CHANGE_DATA', payload)
    }
  },
  getters: {
    loading(state) {
      return state.loading
    },
    data(state) {
      return state.data === null ? 'null' : state.data
    }
  },
  modules: {
    navLinks
  }
})
