import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import { App } from "vue"
import Home from "../views/Home.vue"

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
