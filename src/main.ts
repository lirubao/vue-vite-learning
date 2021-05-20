import { createApp } from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
import App from "./App.vue"
import store from "./store"

axios.defaults.withCredentials = false
axios.defaults.timeout = 16000
createApp(App).use(store).use(VueAxios, axios).mount("#app")
