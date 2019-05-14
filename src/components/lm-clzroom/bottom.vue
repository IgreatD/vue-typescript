<template>
  <lm-flex
    class="clz-ft text-normal"
    justify="space-between"
  >
    <span class="clz-ft-price">{{ `￥${clz.LessonPrice /2}` }}/课时</span>
    <span>{{ `共${clz.LessonNumber *2}课时` }}</span>
  </lm-flex>
</template>

<script lang='ts'>
import { Vue, Prop, Component } from 'vue-property-decorator';
import { ClzroomDataModel } from '@/types/models';
import LmFlex from '@/components/lm-flex/index.vue';
@Component({
  components: {
    LmFlex,
  },
})
export default class LmClzroomBottom extends Vue {
  @Prop() private clz?: ClzroomDataModel;
}
</script>

<style lang="less" scoped>
.clz-ft {
  padding-left: 280px;
  padding-top: 30px;
  padding-right: 20px;
  vertical-align: text-bottom;
  line-height: 30px;
  color: @green;
  &-price {
    font-size: 30px;
    font-weight: 600;
  }
}
</style>
