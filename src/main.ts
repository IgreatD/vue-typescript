import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import importDirective from '@/directive/index';
// 注册指令
importDirective();
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad);
/**
 * @description 导入 vant UI组件
 */
import '@/plugins/vant';
// 导入基本样式
import '@/styles/base.less';
// 权限处理
import '@/router/permission';
// 错误捕获
import '@/lib/errorHander';
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
