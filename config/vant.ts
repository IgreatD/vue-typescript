/*
 * @Author: IgreatD
 * @Date: 2019-05-07 16:40:59
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-07 17:36:46
 *
 * vant 变量配置
 */
/**
 * vant 颜色配置
 */
const colorVar = {
  white: '#ffffff',
  red: '#03a9f4',
  blue: '#3eaf7c',
  orange: '#f08d49',
  green: '#3eaf7c',
  greenDark: '#3e9970',
};

/**
 * vant 导航栏
 */
const navBar = {
  'nav-bar-background-color': colorVar.green,
  'nav-bar-icon-color': colorVar.white,
  'nav-bar-text-color': colorVar.white,
  'nav-bar-title-text-color': colorVar.white,
  'nav-bar-active-color': colorVar.greenDark,
};

module.exports = {
  ...colorVar,
  ...navBar,
};
