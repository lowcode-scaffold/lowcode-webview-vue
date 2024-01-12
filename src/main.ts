import { createApp } from "vue";
import "uno.css";
import "./style.scss";
import App from "./App.vue";
import { init } from "./webview";
init();
createApp(App).mount("#root");
