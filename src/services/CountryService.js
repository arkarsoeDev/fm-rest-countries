const axios = require("axios").default;

const apiClient = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAllData() {
    return apiClient.get("/all");
  },
  getCountry(name) {
    return apiClient.get("/name/" + name);
  },
  getByRegion(region) {
    return apiClient.get("/region/" + region);
  },
  getCountryByCode(code, field) {
    return apiClient.get(
      "/alpha?codes=" + code.toString() + "&fields=" + field
    );
  },
};
