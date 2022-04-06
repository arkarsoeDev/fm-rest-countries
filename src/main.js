import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faMoon,
  faMagnifyingGlass,
  faArrowLeftLong,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faMoon, farMoon, faMagnifyingGlass, faArrowLeftLong, faAngleDown);

/* add font awesome icon component */
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
