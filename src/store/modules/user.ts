import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import { SET_AUTH, SET_USER_INFO } from '@/store/mutations-types';
import { UserDataModel } from '@/types/models';
import store from '@/store';
import { getAuth, setAuth, getUserInfo, setUserInfo } from '@/lib/auth';
import { login, getUserToken, updateUserInfo } from '@/api/user';
import { ILoginTypes } from '@/types/api';
import { IAuthTypes } from '@/lib/auth.d';
@Module({
  name: 'user',
  dynamic: true,
  store,
  namespaced: true,
})
class User extends VuexModule {
  public auth = getAuth();
  public userInfo = getUserInfo();

  @Mutation
  public [SET_AUTH](token: IAuthTypes) {
    this.auth = token;
  }
  @Mutation
  public [SET_USER_INFO](userInfo: UserDataModel) {
    this.userInfo = userInfo;
  }

  @Action
  public async getUserToken() {
    if (this.auth) {
      return await getUserToken({
        Password: this.auth.password,
        UserName: this.auth.userName,
        TimeSpan: parseInt((new Date().getTime() / 1000).toString(), 10),
        MemberTypeID: 6,
      }).then((res) => {
        const newAuth = this.auth;
        newAuth!.token = res.data.Token;
        setAuth(newAuth!);
        this.context.commit(SET_AUTH, newAuth);
        return res.data.Token;
      });
    }
    return Promise.reject('token 获取失败');
  }

  @Action
  public async login(user: ILoginTypes) {
    return await login(user).then((res) => {
      const userInfo = res.data.Data!;
      const token = res.data.Token;
      const auth = {
        token,
        userName: user.UserName!,
        password: user.Password!,
      };
      setAuth(auth);
      setUserInfo(userInfo);
      this.context.commit(SET_USER_INFO, userInfo);
      this.context.commit(SET_AUTH, auth);
    });
  }

  @Action
  public async updateUserInfo(userInfo: string[]) {
    return await updateUserInfo(userInfo).then(() => {
      if (this.userInfo) {
        this.userInfo[userInfo[0]] = userInfo[1];
        setUserInfo(this.userInfo);
        this.context.commit(SET_USER_INFO, this.userInfo);
      }
    });
  }

  @Action
  public async logout() {
    return await new Promise((res) => {
      localStorage.clear();
      this.context.commit(SET_AUTH, undefined);
      this.context.commit(SET_USER_INFO, undefined);
      res();
    });
  }
}

export default getModule(User);
