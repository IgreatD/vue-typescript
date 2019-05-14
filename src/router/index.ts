import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/layout.vue';
import metaConfig from './meta-config';
Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/clzroom',
      component: Layout,
      children: [
        {
          path: '/clzroom',
          name: 'Clzroom',
          component: () => import('@/views/clzroom/index.ts').then((m) => m.default),
          meta: metaConfig.clzroom,
        },
        {
          path: '/mine',
          name: 'Mine',
          component: () => import('@/views/mine/index.ts').then((m) => m.default),
          meta: metaConfig.mine,
        },
        {
          path: '/settings',
          name: 'Settings',
          component: () => import('@/views/mine/settings/index.vue').then((m) => m.default),
          meta: metaConfig.settings,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/mine/login/index.ts').then((m) => m.default),
        },
      ],
    },
  ],
});

export default router;
