import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/layout.vue';
Vue.use(Router);

export interface IMetaConfigTypes {
  [routerName: string]: {
    title: string;
    showLeft: boolean;
    showBottom: boolean;
    right?: {
      icon?: string;
      name?: string;
    };
  };
}

const metaConfig: IMetaConfigTypes = {
  classroom: { showLeft: false, showBottom: true, right: { name: '分享' }, title: '课堂' },
  mine: { showLeft: false, showBottom: true, right: { icon: 'lm-shezhi' }, title: '我的' },
};

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/classroom',
          name: 'Classroom',
          component: () => import('@/views/About.vue'),
          meta: metaConfig.classroom,
        },
        {
          path: '/mine',
          name: 'Mine',
          component: () => import('@/views/mine/index.ts'),
          meta: metaConfig.mine,
        },
      ],
    },
  ],
});
