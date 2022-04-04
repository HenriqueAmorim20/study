// Arquivo principal do vue onde se utiliza o router e onde o app é montado em um elemento html de id #app

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
