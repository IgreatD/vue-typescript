/*
 * @Author: IgreatD
 * @Date: 2019-05-09 16:44:48
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-09 17:30:28
 */

/**
 * @description transform axios data
 * @export
 * @interface IBaseModel
 */
export interface IBaseModel {
  data: ICommonModel;
}

/**
 * @description 数据共同的类型
 * @export
 * @interface ICommonModel
 */
export default interface ICommonModel {
  Code?: number;
  Message?: string;
  PageCount?: number;
  RowsCount?: number;
}
