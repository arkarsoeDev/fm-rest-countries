import { createStore } from "vuex";
import CountrySerivce from "@/services/CountryService.js";
export default createStore({
  state: {
    themeDark: false,
    countries: [],
    searchCountry: [],
    searchCountryName: "",
  },
  mutations: {
    CHANGE_THEME(state, value) {
      state.themeDark = value;
    },
    SET_COUNTRIES(state, value) {
      state.countries = value;
    },
    SET_SEARCH_COUNTRY(state, countryArr) {
      state.searchCountry = countryArr;
    },
    SET_SEARCH_COUNTRY_NAME(state, countryName) {
      state.searchCountryName = countryName;
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
    searchCountry({ state, commit, getters }, { newValue }) {
      if (state.searchCountryName !== newValue) {
        commit("SET_SEARCH_COUNTRY_NAME", newValue);
        let countryArr = [];
        if (newValue.length > 0) {
          countryArr = getters.getSearchCountry(newValue);
        }
        commit("SET_SEARCH_COUNTRY", countryArr);
      }
    },
  },
  modules: {},
  getters: {
    getSearchCountry: (state) => (newValue) => {
      return state.countries.filter((country) =>
        country.name
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(newValue.toLowerCase().replace(/\s/g, ""))
      );
    },
  },
});
