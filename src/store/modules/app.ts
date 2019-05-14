import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
@Module({ name: 'app', dynamic: true, store, namespaced: true })
class App extends VuexModule {}

export default getModule(App);
