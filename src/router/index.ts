import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'
import { useMiddleware } from './middleware'
const constantRoutes: RouteRecordRaw[] =[
  {
    path: '/',
    redirect: '/workbench'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/loginIndex.vue')
  },
  {
    path:'/workbench',
    name:'workbench',
    meta:{name:'首页'},
    component:() => import('@/layouts/index.vue'),
    children:[],
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  scrollBehavior() {
    return { top: 0 }
  }
})
useMiddleware(router)
export default router
