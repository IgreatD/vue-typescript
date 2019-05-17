import { UserDataModel } from '@/types/models';
import { IAuthTypes } from './auth.d';
export function getAuth(): IAuthTypes | null {
  const auth = localStorage.getItem('auth');
  if (typeof auth === 'string') {
    return JSON.parse(auth) as IAuthTypes;
  }
  return null;
}
export function setAuth(auth: IAuthTypes) {
  localStorage.setItem('auth', JSON.stringify(auth));
}

export function setUserInfo(userInfo: UserDataModel) {
  localStorage.setItem('user_info', JSON.stringify(userInfo));
}

export function getUserInfo(): UserDataModel | null {
  const userStr = localStorage.getItem('user_info');
  if (typeof userStr === 'string') {
    return JSON.parse(userStr) as UserDataModel;
  }
  return null;
}
