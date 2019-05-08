import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { SHOW_BOTTOM } from '@/store/mutations-types';
import store from '@/store';
@Module({ name: 'app', dynamic: true, store })
export default class App extends VuexModule {
  public showBottom = true;

  @Mutation
  public [SHOW_BOTTOM](showBottom: boolean) {
    this.showBottom = showBottom;
  }

  @Action({ commit: SHOW_BOTTOM })
  public changeBottom(showBottom: boolean) {
    return showBottom;
  }
}
