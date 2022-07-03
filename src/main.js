import {createApp} from "vue";
import App from "@/App";
const _ = require("lodash");

const app = createApp(App);

app.config.globalProperties.$_ = _;



app.mount("#app");