import AboutView from '@/Views/AboutView.vue'
import AdminView from '@/Views/AdminView.vue'
import BasketVIew from '@/Views/BasketView.vue'
import HomeView from '@/Views/HomeView.vue'
import LoginView from '@/Views/LoginView.vue'
import MenuAvailabilityView from '@/Views/MenuAvailabilityView.vue'
import MenuView from '@/Views/MenuView.vue'
import OrdersView from '@/Views/OrdersView.vue'
import RegisterVIew from '@/Views/RegisterView.vue'
import ReservationListView from '@/Views/ReservationListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

function checkAuth() {
  let token = localStorage.getItem('token')
  if (token !== null) {
    return true
  } else {
    return false
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterVIew
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/basket',
      name: 'basket',
      component: BasketVIew
    },
    {
      path: '/admin',
      name: 'adimin',
      component: AdminView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: ReservationListView
    },
    {
      path: '/menu-avalibility',
      name: 'menu-avalibility',
      component: MenuAvailabilityView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && !checkAuth()) {
    next('/')
  } else {
    next()
  }
})


export default router
