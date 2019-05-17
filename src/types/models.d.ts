/*
 * @Author: IgreatD
 * @Date: 2019-05-09 16:44:48
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-16 14:42:46
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
  Data?: UserDataModel;
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
   * @description 头像
   * @type {string}
   * @memberof UserDataModel
   */
  HeadImage: string;

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
  isOrganizationAccount: string;

  [prop: string]: string;
}

/**
 * @description 我的推广
 * @export
 * @interface MyRefererModel
 * @extends {ICommonModel}
 */
export interface MyRefererModel extends ICommonModel {
  Data: MyRefererDataModel[];
}

/**
 * @description 我的推广Data
 * @export
 * @interface MyRefererDataModel
 */
export interface MyRefererDataModel {
  /**
   * @description 课堂名称
   * @type {string}
   */
  ClassName: string;

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
   * @description 招生人数
   * @type {number}
   */
  RecruitStudentsCount: number;
  /**
   * @description 推广人数
   * @type {number}
   */
  SpreadCount: number;
  /**
   * @description 推广招生
   * @type {number}
   */
  SpreadStudentCount: number;

  /**
   * @description 开课时间
   * @type {string}
   */
  BeginDate: string;

  /**
   * @description 课程关联推广员的推广码
   * @type {string}
   * @memberof MyRefererDataModel
   */
  MyRefererCode: string;
}

/**
 * @description 我的招生、我的推广
 * @export
 * @interface MyRefererRecruitModel
 * @extends {ICommonModel}
 */
export interface MyRefererRecruitModel extends ICommonModel {
  Data: MyRefererRecruitDataModel[];
}

/**
 * @description 我的招生、我的推广 Data
 * @export
 * @interface MyRefererRecruitDataModel
 */
export interface MyRefererRecruitDataModel {
  /**
   * @description 招生学生名称
   * @type {string}
   * @memberof MyRefererRecruitDataModel
   */
  StudentName?: string;

  /**
   * @description 报名支付时间
   * @type {string}
   * @memberof MyRefererRecruitDataModel
   */
  JoinPassDate?: string;

  /**
   * @description 推广员名称
   * @type {string}
   * @memberof MyRefererRecruitDataModel
   */
  RefererName?: string;

  /**
   * @description 推广的学生个数
   * @type {string}
   * @memberof MyRefererRecruitDataModel
   */
  SpreadStudentCount?: string;
}
