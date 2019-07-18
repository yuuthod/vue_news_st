import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '@/Views/NewsView.vue'
import AskView from '@/Views/AskView.vue'
import JobsView from '@/Views/JobsView.vue'
import UserView from '@/Views/UserView.vue'
import ItemView from '@/Views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'news'
    },
    {
      path: '/news',
      component: NewsView
    },
    {
      path: '/jobs',
      component: JobsView
    },
    {
      path: '/ask',
      component: AskView
    },
    {
      path: '/user',
      component: UserView
    },
    {
      path: '/item',
      component: ItemView
    }
  ]
})