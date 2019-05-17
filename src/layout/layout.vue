<template>
  <div>
    <lm-header
      :meta="meta"
      v-if="showHeader"
    />
    <main
      :style="styleMainObject"
      class="app-main"
    >
      <transition :name="transitionName">
        <keep-alive :include="['Classroom']">
          <router-view />
        </keep-alive>
      </transition>
    </main>
    <lm-footer v-show="showBottom" />
  </div>
</template>

<script lang='ts'>
import LmFooter from './lm-footer.vue';
import LmHeader from './lm-header.vue';
import { Vue, Component, Watch, Provide, Emit } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';
import user from '@/store/modules/user';
@Component({
  components: {
    LmFooter,
    LmHeader,
  },
})
export default class LmLayout extends Vue {
  private transitionName: string = 'van-slide-right';
  @Watch('$route', { immediate: true })
  private onRouteChange(val: RouteConfig) {
    const router = this.$router as any;
    const isBack = router.isBack;
    if (isBack) {
      this.transitionName = 'van-slide-left';
    } else {
      this.transitionName = 'van-slide-right';
    }
    router.isBack = false;
  }

  @Provide()
  get userInfo() {
    return user.userInfo;
  }

  get meta() {
    return this.$route.meta;
  }

  get showHeader() {
    return this.meta.showHeader;
  }

  get showBottom() {
    return this.meta.showBottom;
  }

  get styleMainObject() {
    return {
      paddingBottom: this.showBottom ? '50px' : '0',
      paddingTop: this.showHeader ? '46px' : '0',
    };
  }
}
</script>

<style lang="less" scoped>
.app-main {
  width: 100vw;
  max-width: 100vw;
}
</style>
