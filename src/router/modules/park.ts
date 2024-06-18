export default {
    path: '/park',
    name: 'Park',
    meta: { name: '园区管理' },
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        path: 'building',
        name: 'building',
        meta: { name: '楼宇管理' },
        component: () => import('@/views/park/building.vue')
      },
      {
        path: 'enterprise',
        name: 'enterprise',
        meta: { name: '企业管理' },
        component: () => import('@/views/park/enterprise.vue')
      }
    ]
  }