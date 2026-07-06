import LoginView from '@/views/LoginView.vue'
import OverviewView from '@/views/OverviewView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import PcSpecsView from '@/views/PcSpecsView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: LoginView,
    meta: {
      title: 'Terminal Access Portal',
      showBackButton: false,
    },
  },
  {
    path: '/overview',
    name: 'overview',
    component: OverviewView,
    meta: {
      title: 'Terminal Access Portal',
      showBackButton: false,
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
    meta: {
      title: 'Portfolio',
    },
  },
  {
    path: '/pc-specs',
    name: 'pc-specs',
    component: PcSpecsView,
    meta: {
      title: 'PC Specifications',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
