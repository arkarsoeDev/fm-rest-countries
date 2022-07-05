import { createStore } from "vuex";
import CountrySerivce from "@/services/CountryService.js";
export default createStore({
  state: {
    loading: false,
    themeDark: false,
    countries: [],
    borderCountries: [],
    currentCountry: [],
    searchCountryName: "",
    region: "",
    searchError: false,
  },
  mutations: {
    CHANGE_THEME(state, value) {
      state.themeDark = value;
    },
    SET_COUNTRIES(state, value) {
      state.countries = value;
    },
    SET_BORDER_COUNTRIES(state, value) {
      state.borderCountries = value;
    },
    SET_SEARCH_COUNTRY_NAME(state, countryName) {
      state.searchCountryName = countryName;
    },
    SET_REGION(state, region) {
      state.region = region;
    },
    SET_CURRENT_COUNTRY(state, value) {
      state.currentCountry = value;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_SEARCH_ERROR(state, value) {
      state.searchError = value;
    },
  },
  actions: {
    changeTheme({ commit }, payload) {
      commit("CHANGE_THEME", payload);
    },
    fetchCountries({ state, commit }, overwrite = false) {
      if (state.countries.length === 0 || overwrite) {
        commit("SET_LOADING", true);
        return CountrySerivce.getAllData()
          .then((response) => {
            commit("SET_LOADING", false);
            commit("SET_COUNTRIES", response.data);
          })
          .catch((error) => {
            commit("SET_LOADING", false);
            throw error;
          });
      }
    },
    fetchCountry({ commit }, name) {
      return CountrySerivce.getCountry(name)
        .then((response) => {
          commit("SET_CURRENT_COUNTRY", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchCountryByCode({ commit }, [code, field]) {
      return CountrySerivce.getCountryByCode(code, field)
        .then((response) => {
          commit("SET_BORDER_COUNTRIES", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    setRegion({ commit }, { region }) {
      commit("SET_REGION", region);
      commit("SET_SEARCH_COUNTRY_NAME", "");
      commit("SET_LOADING", true);
      CountrySerivce.getByRegion(region)
        .then((response) => {
          commit("SET_LOADING", false);
          commit("SET_COUNTRIES", response.data);
        })
        .catch((error) => {
          commit("SET_LOADING", false);
          throw error;
        });
    },
    searchCountry({ commit }, newValue) {
      commit("SET_LOADING", true);
      commit("SET_SEARCH_COUNTRY_NAME", newValue);
      commit("SET_REGION", "Filter by region");
      return CountrySerivce.getCountry(newValue)
        .then((response) => {
          commit("SET_COUNTRIES", response.data);
          commit("SET_LOADING", false);
        })
        .catch((error) => {
          commit("SET_LOADING", false);
          throw error;
        });
    },
    setSearchError({ commit }, payload) {
      commit("SET_SEARCH_ERROR", payload);
    },
  },
  modules: {},
  getters: {},
});
