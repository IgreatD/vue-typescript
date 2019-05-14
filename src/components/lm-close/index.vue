<template>
  <div class="close">
    <van-icon
      class="van-icon-lm-guanbi close-icon"
      @click="close"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Icon } from 'vant';
@Component({
  components: {
    [Icon.name]: Icon,
  },
})
export default class LmClose extends Vue {
  private close() {
    this.$router.back();
  }
}
</script>

<style lang="less" scoped>
.close {
  padding: 20px;
  &-icon {
    padding: 20px;
    font-size: 40px;
  }
}
</style>
