import axios from '@/lib/axios';
import { IClzroomTypes } from '@/api/clzroom-types';
import { TOP_SERVICE } from '@/api/service';
import ClzroomModel from '@/models/ClzroomModel';
/**
 * @description 获取名师课程列表
 * @param ClassID 课堂id
 * @param PageIndex
 * @param PageSize
 */
export const getClzList = ({ ClassID, PageIndex, PageSize }: IClzroomTypes) => {
    return axios.create<ClzroomModel>({
        url: `${TOP_SERVICE}TopTeacherClassListForPeriod`,
        data: { ClassID, PageIndex, PageSize },
    });
};
