import { createApp } from 'vue'
import App from './App.vue'
import { useDirective } from './components/todos'
import router from './router'
import store from './store'

const app = createApp(App)
useDirective(app)
app.use(router)
app.use(store)
app.mount('#app')
