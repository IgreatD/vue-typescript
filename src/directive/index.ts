import clipboard from './modules/clipboard';
import Vue from 'vue';
const importDerectives = () => {
  Vue.directive('clipboard', clipboard);
};

export default importDerectives;
