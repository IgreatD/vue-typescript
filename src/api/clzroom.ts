import axios from '@/lib/axios';
import { IClzroomTypes } from '@/types/api';
import { TOP_SERVICE } from '@/api/service';
import { ClzroomModel } from '@/types/models';
/**
 * @description 获取名师课程列表
 * @param ClassID 课堂id
 * @param PageIndex
 * @param PageSize
 */
export const getClzList = (payload: IClzroomTypes) => {
  return axios.create<ClzroomModel>({
    url: `${TOP_SERVICE}TopTeacherClassListForPeriod`,
    data: payload,
  });
};
