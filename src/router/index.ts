import { createRouter, createWebHashHistory } from "vue-router"
import {App} from "vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: []
})

export function setupRouter(app:App<Element>) {
  app.use(router)
}

export default router
