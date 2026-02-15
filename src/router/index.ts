import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import CallsPage from '../views/CallsPage.vue';
import ChatsPage from '../views/ChatsPage.vue';
import NewsPage from '../views/NewsPage.vue';
import SettingsPage from '../views/SettingsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Chats',
    component: ChatsPage
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage
  },
  {
    path: '/calls',
    name: 'Calls',
    component: CallsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
