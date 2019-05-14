import { UserDataModel } from '@/types/models';
export function getAuth() {
  return localStorage.getItem('auth');
}

export function setAuth(str: string) {
  localStorage.setItem('auth', str);
}

export function setUserInfo(userInfo: UserDataModel) {
  localStorage.setItem('user_info', JSON.stringify(userInfo));
}

export function getUserInfo(): UserDataModel | undefined {
  const userStr = localStorage.getItem('user_info');
  if (typeof userStr === 'string') {
    return JSON.parse(userStr) as UserDataModel;
  }
  return undefined;
}
