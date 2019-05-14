import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import importDirective from '@/directive/index';
// 注册指令
importDirective();
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad);
import '@/plugins/vant';
import '@/styles/base.less';
import '@/router/permission';
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
