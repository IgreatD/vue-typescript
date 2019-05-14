<template>
  <div>
    <mine-header :user-info="userInfo" />
    <mine-body :user-info="userInfo" />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Inject } from 'vue-property-decorator';
import MineHeader from './mine-header/index.vue';
import MineBody from './mine-body/index.vue';
import { getModule } from 'vuex-module-decorators';
import user from '@/store/modules/user';
@Component({
  components: { MineHeader, MineBody },
})
export default class LmMine extends Vue {
  get userInfo() {
    return user.userInfo;
  }
}
</script>
