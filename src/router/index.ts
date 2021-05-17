import { h } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/todos', name: 'todos', component: () => import('comps/todos/Todos.vue') },
  ],
})

// 特性: 动态路由
router.addRoute({
  path: '/about',
  name: 'about',
  component: () => import('../views/About.vue'),
})
// 添加子路由
router.addRoute('about', {
  path: '/about/info',
  name: 'info',
  component: {
    render() {
      return h('div', 'info page')
    },
  },
})
export default router
