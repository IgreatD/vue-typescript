<template>
  <div>
    <mine-header :user-info="userInfo" />
    <mine-body :user-info="userInfo" />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Inject, Watch } from 'vue-property-decorator';
import MineHeader from './mine-header/index.vue';
import MineBody from './mine-body/index.vue';
import { getModule } from 'vuex-module-decorators';
import user from '@/store/modules/user';
import app from '@/store/modules/app';
@Component({
  components: { MineHeader, MineBody },
})
export default class LmMine extends Vue {
  get userInfo() {
    return user.userInfo;
  }
  get action() {
    return app.action;
  }

  @Watch('action', { immediate: true })
  private onActionChange(newValue: string, oldValue: string) {
    if (newValue === 'Settings') {
      app.setAction(undefined);
      this.$router.push({
        name: newValue,
      });
    }
  }
}
</script>
