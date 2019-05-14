import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import { SET_TOKEN, SET_USER_INFO } from '@/store/mutations-types';
import { UserDataModel } from '@/types/models';
import store from '@/store';
import { getAuth, setAuth, getUserInfo, setUserInfo } from '@/lib/auth';
import { login } from '@/api/user';
import { ILoginTypes } from '@/types/api';
@Module({
  name: 'user',
  dynamic: true,
  store,
  namespaced: true,
})
class User extends VuexModule {
  public token = getAuth();
  public userName = '';
  public password = '';
  public userInfo = getUserInfo() || {};

  @Mutation
  public [SET_TOKEN](token: string) {
    this.token = token;
  }
  @Mutation
  public [SET_USER_INFO](userInfo: UserDataModel) {
    this.userInfo = userInfo;
  }

  @Action({ commit: SET_TOKEN })
  public async getUserToken() {
    return await 'token';
  }

  @Action
  public async login(user: ILoginTypes) {
    return await login(user).then((res) => {
      const userInfo = res.data.Data;
      const token = res.data.Token;
      setUserInfo(userInfo);
      setAuth(token);
      this.context.commit(SET_USER_INFO, userInfo);
      this.context.commit(SET_TOKEN, token);
    });
  }
}

export default getModule(User);
