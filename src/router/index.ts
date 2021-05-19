import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/todos', name: 'todos', component: () => import('comps/todos/Todos.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
})
// 使用命名导航至404页面
// router.resolve({
//   name:'not-found',
//   params:{
//     pathMatch:['not','found']
//   }
// })
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
