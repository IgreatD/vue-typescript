/*
 * @Author: IgreatD
 * @Date: 2019-05-09 16:44:48
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-14 14:32:58
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
export interface ICommonModel {
  Code?: number;
  Message?: string;
  PageCount?: number;
  RowsCount?: number;
}

/**
 * @description 课堂model
 * @export
 * @interface ClzroomModel
 * @extends {ICommonModel}
 */
export interface ClzroomModel extends ICommonModel {
  Data: [ClzroomDataModel];
}

/**
 * @description 课堂Data model
 * @export
 * @interface ClzroomDataModel
 */
export interface ClzroomDataModel {
  /**
   * @description 课堂id
   * @type {string}
   */
  ClassID: string;

  /**
   * @description 年级学段
   * @type {string}
   */
  Stage: string;

  /**
   * @description 科目名称
   * @type {string}
   */
  CourseInfoName: string;

  /**
   * @description 封面
   * @type {string}
   * @memberof ClzroomDataModel
   */
  CoverPath: string;

  /**
   * @description 讲师名称
   * @type {string}
   * @memberof ClzroomDataModel
   */
  TeacherName: string;

  /**
   * @description 讲师职称
   * @type {string}
   * @memberof ClzroomDataModel
   */
  TeacherRankCode: string;

  /**
   * @description 开课时间
   * @type {string}
   * @memberof ClzroomDataModel
   */
  BeginDate: string;
}

/**
 * @description 用户model
 * @export
 * @interface UserModel
 * @extends {ICommonModel}
 */
export interface UserModel extends ICommonModel {
  Data: UserDataModel;
  Token: string;
}

/**
 * @description 用户Data model
 * @export
 * @interface UserDataModel
 */
export interface UserDataModel {
  /**
   * @description 用户id
   * @type {string}
   */
  AccountID: string;

  /**
   * @description 余额
   * @type {string}
   */
  Balance: string;

  /**
   * @description 我的邀请码
   * @type {string}
   */
  MyInvitationCode: string;

  /**
   * @description 用户昵称
   * @type {string}
   * @memberof UserDataModel
   */
  Name: string;

  /**
   * @description 用户备注
   * @type {string}
   * @memberof UserDataModel
   */
  Remark: string;

  /**
   * @description 手机号
   * @type {string}
   * @memberof UserDataModel
   */
  UserName: string;

  /**
   * @description 是否是组织机构成语 1 是 else 不是
   * @type {string}
   * @memberof UserDataModel
   */
  isOrganizationAccount: number;
}
