import axios from '@/lib/axios';
import { ILoginTypes } from '@/types/api';
import { TOP_SERVICE } from '@/api/service';
import { UserModel } from '@/types/models';
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
