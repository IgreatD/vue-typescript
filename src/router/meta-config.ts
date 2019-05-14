import IMetaTypes from '@/types/meta-types';

export interface IMetaConfigTypes {
  [routerName: string]: IMetaTypes;
}

const metaConfig: IMetaConfigTypes = {
  clzroom: {
    showHeader: true,
    right: { name: '分享' },
    title: '课堂',
    showLeft: false,
    showBottom: true,
  },
  mine: {
    showHeader: true,
    right: { icon: 'lm-shezhi', action: 'Settings' },
    title: '我的',
    showLeft: false,
    showBottom: true,
  },
  settings: {
    showHeader: true,
    title: '设置',
    showLeft: true,
    showBottom: false,
    requireAuth: true,
  },
  login: { showBottom: false, showHeader: false },
};

export default metaConfig;
