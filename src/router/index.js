import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CountryDetails from "../views/CountryDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/countries/:name",
    props: true,
    name: "CountryDetails",
    component: CountryDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
