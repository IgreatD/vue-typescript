import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { SET_TOKEN } from '@/store/mutations-types';
import store from '@/store';
@Module({ name: 'user', dynamic: true, store })
export default class User extends VuexModule {
  public toekn = '';
  public userName = '';
  public password = '';

  @Mutation
  public [SET_TOKEN](toekn: string) {
    this.toekn = toekn;
  }

  @Action({ commit: SET_TOKEN })
  public async getUserToken() {
    return await 'token';
  }
}
