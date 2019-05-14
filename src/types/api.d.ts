/*
 * @Author: IgreatD
 * @Date: 2019-05-08 14:47:32
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-14 15:27:31
 *
 * 名称课程请求参数类型
 */
/**
 * @description 用户登录参数类型
 * @export
 * @interface ILoginTypes
 */
export interface ILoginTypes {
  /**
   * @description 用户名
   * @type {string}
   * @memberof ILoginTypes
   */
  UserName?: string;

  /**
   * @description 密码
   * @type {string}
   * @memberof ILoginTypes
   */
  Password: string;

  /**
   * @description 时间戳
   * @type {number}
   * @memberof ILoginTypes
   */
  TimeSpan: number;

  /**
   * @description 微信 openId
   * @type {string}
   * @memberof ILoginTypes
   */
  OpenId?: string;
}

/**
 * @description 获取名师课程列表参数类型
 * @export
 * @interface IClzroomTypes
 */
export interface IClzroomTypes {
  /**
   * @description 分期
   * @type {number}
   * @memberof IClzroomTypes
   */
  PeriodSort: number;

  /**
   * @description
   * @type {number}
   * @memberof IClzroomTypes
   */
  PageIndex: number;

  /**
   * @description
   * @type {number}
   * @memberof IClzroomTypes
   */
  PageSize: number;
}
