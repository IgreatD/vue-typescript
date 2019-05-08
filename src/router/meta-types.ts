/*
 * @Author: IgreatD
 * @Date: 2019-05-07 17:50:38
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-08 14:24:07
 *
 * 路由meta类型
 */
export default interface IMetaTypes {
  /**
   * @description 导航栏标题
   */
  title: string;
  /**
   * @description 是否显示返回按钮
   */
  showLeft: boolean;
  /**
   * @description 是否显示底部按钮
   */
  showBottom: boolean;
  /**
   * @description 导航栏右侧内容
   */
  right?: {
    /**
     * @description 右侧图标
     */
    icon?: string;
    /**
     * @description 右侧文字显示
     */
    name?: string;
  };
}
