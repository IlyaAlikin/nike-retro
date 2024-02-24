import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBookmark,
  faCalendarDays,
  faPen,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faPen, faUserGroup, faBookmark, faCalendarDays, faTrashCan);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

// app.use(router)

app.mount("#app");
