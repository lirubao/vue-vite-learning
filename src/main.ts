import { createApp } from 'vue'
import App from './App.vue'
import { useDirective } from './components/todos'
import router from './router'

const app = createApp(App)
useDirective(app)
app.use(router)
app.mount('#app')
