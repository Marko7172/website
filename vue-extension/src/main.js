import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Home from "./views/Home.vue";

// Adding style on startup

import "./assets/styles.css";
import "./assets/loginStyle.css";

createApp(App).use(store).use(router).mount('#app')
