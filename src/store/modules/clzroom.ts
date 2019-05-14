import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { getClzList } from '@/api/clzroom';
import { IClzroomTypes } from '@/types/api';
import { ClzroomModel } from '@/types/models';
@Module({
  name: 'Clzroom',
  dynamic: true,
  store,
  namespaced: true,
})
class Clzroom extends VuexModule {
  @Action
  public getClzList(payload: IClzroomTypes): Promise<ClzroomModel> {
    return new Promise((resolve, reject) => {
      getClzList(payload)
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }
}
export default getModule(Clzroom);
