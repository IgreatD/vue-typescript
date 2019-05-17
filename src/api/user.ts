import axios from '@/lib/axios';
import { ILoginTypes, IMyRefererTypes, IMyRefererRecuritTypes } from '@/types/api';
import { TOP_SERVICE } from '@/api/service';
import { UserModel, MyRefererModel, MyRefererRecruitModel } from '@/types/models';
/**
 * @description 登录
 * @param user 登录参数
 */
export const login = (user: ILoginTypes) => {
  return axios.create<UserModel>({
    url: `${TOP_SERVICE}Login`,
    data: user,
  });
};

/**
 * @description 获取用户 token
 * @export
 * @param {ILoginTypes} user
 * @returns
 */
export function getUserToken(user: ILoginTypes) {
  return axios.create<UserModel>({
    url: `${TOP_SERVICE}GetUserToken`,
    data: user,
  });
}

/**
 * @description 更新用户信息
 * @export
 * @param {string[]} userInfo
 * @returns
 */
export const updateUserInfo = (userInfo: string[]) => {
  return axios.create<void>({
    url: `${TOP_SERVICE}UpdateUserInfo`,
    data: {
      [userInfo[0]]: userInfo[1],
    },
  });
};

/**
 * @description 我的推广
 * @param payload {PageIndex , PageSize}
 */
export const getMyReferer = (payload: IMyRefererTypes) => {
  return axios.create<MyRefererModel>({
    url: `${TOP_SERVICE}MyRefererClassList`,
    data: payload,
  });
};

/**
 * @description 我的招生
 * @param payload {PageIndex, PageSize, MyRefererCode}
 */
export const getMyRefererRecurit = (payload: IMyRefererRecuritTypes) => {
  return axios.create<MyRefererRecruitModel>({
    url: `${TOP_SERVICE}MyRefererClassStudentList`,
    data: payload,
  });
};

/**
 * @description 我的推广
 * @param payload {PageIndex, PageSize, MyRefererCode}
 */
export const getMyRefererReferer = (payload: IMyRefererRecuritTypes) => {
  return axios.create<MyRefererRecruitModel>({
    url: `${TOP_SERVICE}GetReferersInformationInfoList`,
    data: payload,
  });
};
