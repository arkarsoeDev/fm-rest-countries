import { createStore } from "vuex";
import CountrySerivce from "@/services/CountryService.js";
export default createStore({
  state: {
    themeDark: false,
    countries: [],
  },
  mutations: {
    CHANGE_THEME(state, value) {
      state.themeDark = value;
    },
    SET_COUNTRIES(state, value) {
      state.countries = value;
    },
  },
  actions: {
    changeTheme({ commit }, payload) {
      commit("CHANGE_THEME", payload);
    },
    fetchCountries({ commit }) {
      return CountrySerivce.getAllData()
        .then((response) => {
          commit("SET_COUNTRIES", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
  getters: {},
});
