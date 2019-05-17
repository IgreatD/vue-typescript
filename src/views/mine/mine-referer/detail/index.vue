<template>
  <div
    class="referer-detail"
    v-if="referer"
  >
    <my-referer-header :clz="referer" />
    <my-referer-image :clz="referer" />
    <my-referer-tab />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { MyRefererDataModel } from '@/types/models';
import myReferer from '@/store/modules/myReferer';
import MyRefererHeader from '@/components/lm-business/clz-header.vue';
import MyRefererImage from '@/components/lm-business/clz-image.vue';
import MyRefererTab from './tab.vue';
@Component({
  components: {
    MyRefererHeader,
    MyRefererImage,
    MyRefererTab,
  },
})
export default class MyRefererDetail extends Vue {
  private created() {
    if (this.referer === 'undefined') {
      this.$router.back();
    }
  }
  get referer() {
    console.log(myReferer);
    return myReferer.referer;
  }
}
</script>

<style lang="less" scoped>
</style>
