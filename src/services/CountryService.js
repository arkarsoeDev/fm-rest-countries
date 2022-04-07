import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://restcountries.com/v2",
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
};
