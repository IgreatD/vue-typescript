<template>
  <div>
    <lm-header :meta="meta" />
    <main
      :style="styleMainObject"
      class="app-main"
    >
      <router-view></router-view>
    </main>
    <lm-footer />
  </div>
</template>

<script lang='ts'>
import LmFooter from './lm-footer.vue';
import LmHeader from './lm-header.vue';
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {
    LmFooter,
    LmHeader,
  },
})
export default class LmLayout extends Vue {
  get meta() {
    return this.$route.meta;
  }

  get showBottom() {
    return this.meta.showBottom;
  }

  get styleMainObject() {
    return {
      paddingBottom: this.showBottom ? '50px' : '0',
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
