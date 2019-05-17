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
          component: () => import('@/views/clzroom/index.ts'),
          meta: metaConfig.clzroom,
        },
        {
          path: '/mine',
          name: 'Mine',
          component: () => import('@/views/mine/index.ts'),
          meta: metaConfig.mine,
        },
        {
          path: '/settings',
          name: 'Settings',
          component: () => import('@/views/mine/settings/index.vue'),
          meta: metaConfig.settings,
        },
        {
          path: '/settings/detail',
          name: 'UserUpdate',
          component: () => import('@/views/mine/settings/detail/index.vue'),
          meta: metaConfig.settingsDetail,
          beforeEnter: (to, from, next) => {
            const title = to.query.title;
            if (title) {
              to.meta.title = title;
            }
            next();
          },
        },
        {
          path: '/myReferer',
          name: 'MyReferer',
          component: () => import('@/views/mine/mine-referer/index.vue'),
          meta: metaConfig.myReferer,
        },
        {
          path: '/myReferer/detail',
          name: 'MyRefererDetail',
          component: () => import('@/views/mine/mine-referer/detail/index.vue'),
          meta: metaConfig.myReferer,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/mine/login/index.ts'),
        },
      ],
    },
  ],
});

export default router;
