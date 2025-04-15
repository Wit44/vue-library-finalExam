import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BookView from '@/views/BookView.vue'
import LoginView from '@/views/LoginView.vue'
import NewBook from '@/views/NewBook.vue'
import EditBook from '@/views/EditBook.vue'
import OrderView from '@/views/OrderView.vue'
import EditOrder from '@/views/EditOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/book',
      name: 'book',
      component: BookView,
    },
    {
      path: '/book/new',
      name: 'new-book',
      component: NewBook,
    },
    {
      path: '/book/:id',
      name: 'edit-book',
      component: EditBook,
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView,
    },
    {
      path: '/order/:id',
      name: 'edit-order',
      component: EditOrder,
    },
    
    
  ],
})

export default router
