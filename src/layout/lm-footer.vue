<template>
  <footer>
    <van-tabbar v-model="active">
      <template v-for="(tabbar) in tabbarConfig">
        <van-tabbar-item
          @click="toName(tabbar.alias)"
          :key="tabbar.index"
          :icon="tabbar.icon"
        >
          {{tabbar.name}}
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </footer>
</template>


<script lang='ts'>
import { Vue, Component, Watch, Provide } from 'vue-property-decorator';
import { Tabbar, TabbarItem } from 'vant';
import { RouteConfig } from 'vue-router';
import TabbarConfig, { ITabbarTypes } from './tabbar';
@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
})
export default class LmFooter extends Vue {
  @Provide() private active = 0;
  @Provide() private tabbarConfig = TabbarConfig;

  @Watch('$route', { immediate: true })
  private onRouteChange(val: RouteConfig) {
    this.changeActive(val.name!);
  }

  private changeActive(name: string) {
    const activeTabbar = this.tabbarConfig.filter((tabbar) => tabbar.alias === name)[0];
    if (activeTabbar) {
      this.active = activeTabbar.index;
    }
  }

  private toName(name: string) {
    this.$router.replace({ name });
  }
}
</script>
