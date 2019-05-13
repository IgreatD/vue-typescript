import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/layout.vue';
import ImetaTypes from './meta-types';
Vue.use(Router);

export interface IMetaConfigTypes {
  [routerName: string]: ImetaTypes;
}

const metaConfig: IMetaConfigTypes = {
  clzroom: { showLeft: false, showBottom: true, right: { name: '分享' }, title: '课堂' },
  mine: { showLeft: false, showBottom: true, right: { icon: 'lm-shezhi' }, title: '我的' },
};

export default new Router({
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
          path: '/flex',
          name: 'flex',
          component: () => import('@/components/header-content/index.vue'),
          meta: metaConfig.mine,
        },
      ],
    },
  ],
});
