import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Menu/Slots/MainScreen/MainScreen.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/Menu/Slots/AddScreen/AddScreen.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/Menu/Slots/NoteScreen/NoteScreen.vue')
    },
  ]
})

export default router
