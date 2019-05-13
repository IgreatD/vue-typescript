import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { getClzList } from '@/api/clzroom';
import { IClzroomTypes } from '@/api/clzroom-types';
import ClzroomModel from '@/models/ClzroomModel';
@Module({ name: 'Clzroom', dynamic: true, store })
export default class Clzroom extends VuexModule {
    @Action
    public getClzList(payload: IClzroomTypes): Promise<ClzroomModel> {
        return new Promise((resolve, reject) => {
            getClzList(payload)
                .then((data) => {
                    resolve(data.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}
