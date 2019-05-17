import Vue from 'vue';
import { Toast } from 'vant';

const errorHandler = (error: Error) => {
  Toast(error.message);
};

Vue.config.errorHandler = (error) => {
  Toast(error.message);
};

Vue.config.warnHandler = (msg, s, d) => {
  Toast(msg);
};

Vue.prototype.$throw = (error: Error) => errorHandler(error);
