/*
 * @Author: IgreatD
 * @Date: 2019-05-09 16:43:35
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-09 17:30:23
 */
import ICommonModel from './Common.d';

/**
 * @description 课堂model
 * @export
 * @interface ClzroomModel
 * @extends {ICommonModel}
 */
export default interface ClzroomModel extends ICommonModel {
  Data: [ClzroomDataModel];
}

/**
 * @description 课堂Data mdoel
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
