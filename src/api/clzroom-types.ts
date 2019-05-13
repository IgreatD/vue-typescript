/*
 * @Author: IgreatD
 * @Date: 2019-05-08 14:47:32
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-08 15:22:51
 *
 * 名称课程参数类型
 */
/**
 * @description 获取名师课程列表参数类型
 * @export
 * @interface IClzroomTypes
 */
export interface IClzroomTypes {
    /**
     * @description 传 ClzID 获取对应的课程详情，不传获取所有的课程
     * @type {string}
     * @memberof IClzroomTypes
     */
    ClassID?: string;

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
