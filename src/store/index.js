import { createStore } from "vuex";

export default createStore({
  state: {
    themeDark: false,
  },
  mutations: {
    CHANGE_THEME(state, value) {
      state.themeDark = value;
    },
  },
  actions: {
    changeTheme({ commit }, payload) {
      commit("CHANGE_THEME", payload);
    },
  },
  modules: {},
  getters: {
    getThemeDark: (state) => {
      return state.themeDark;
    },
  },
});
