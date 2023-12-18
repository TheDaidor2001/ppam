import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import Toast, { type PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

const options: PluginOptions = {
    timeout: 5000,
    closeOnClick: true,
    draggable: true,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
};

const app = createApp(App)
app.use(createPinia())
app.use(Toast, options);
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
