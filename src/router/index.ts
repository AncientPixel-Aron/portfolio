import LoginView from '@/views/LoginView.vue'
import OverviewView from '@/views/OverviewView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import PcSpecsView from '@/views/PcSpecsView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: LoginView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/overview', name: 'overview', component: OverviewView },
  { path: '/portfolio', name: 'portfolio', component: PortfolioView },
  { path: '/pc-specs', name: 'pc-specs', component: PcSpecsView },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
