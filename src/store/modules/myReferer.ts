import { Module, VuexModule, Action, getModule, Mutation } from 'vuex-module-decorators';
import { MyRefererDataModel } from '@/types/models';
import store from '@/store';
import { getMyReferer, getMyRefererRecurit, getMyRefererReferer } from '@/api/user';
import { IMyRefererTypes, IMyRefererRecuritTypes } from '@/types/api';
@Module({
  name: 'MyReferer',
  dynamic: true,
  store,
  namespaced: true,
})
class MyReferer extends VuexModule {
  public referer: MyRefererDataModel | 'undefined' = 'undefined';

  @Action
  public async getMyReferer(payload: IMyRefererTypes) {
    return await getMyReferer(payload).then((res) => {
      return res.data;
    });
  }

  @Action
  public async getMyRefererRecruit(payload: IMyRefererRecuritTypes) {
    return await getMyRefererRecurit(payload).then((res) => res.data);
  }
  @Action
  public async getMyRefererReferer(payload: IMyRefererRecuritTypes) {
    return await getMyRefererReferer(payload).then((res) => res.data);
  }

  @Mutation
  public setReferer(referer: MyRefererDataModel) {
    this.referer = referer;
  }
}

export default getModule(MyReferer);
