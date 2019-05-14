<template>
  <div
    :style="flexClzStyle"
    class="lm-flex"
  >
    <slot />
  </div>
</template>

<script lang='ts'>
import { Vue, Prop, Component } from 'vue-property-decorator';
@Component
export default class LmFlex extends Vue {
  @Prop({ default: 'row' }) private direction?: 'row' | 'column';
  @Prop({ default: 'flex-start' }) private justify?: string;
  @Prop({ default: 'skretch' }) private align?: string;
  private get flexClzStyle() {
    return {
      'flex-direction': this.direction,
      'justify-content': this.justify,
      'align-items': this.align,
    };
  }
}
</script>

<style lang="less" scoped>
@import './index';
</style>
