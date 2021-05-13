import { createApp } from 'vue'
import App from './App.vue'
import { useDirective } from './components/todos'

const app = createApp(App)
useDirective(app)
app.mount('#app')
