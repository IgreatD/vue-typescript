<template>
  <div
    w-25-18
    aspectratio
    class="clz-img"
  >
    <img
      v-lazy="clz.CoverPath"
      aspectratio-content
    />
    <span class="clz-img-stage">{{ `${clz.Stage}-${clz.CourseInfoName}` }}</span>
  </div>
</template>

<script lang='ts'>
import { Vue, Prop, Component } from 'vue-property-decorator';
import { ClzroomDataModel } from '@/types/models';
@Component
export default class LmClzroomLeft extends Vue {
  @Prop() private clz?: ClzroomDataModel;
}
</script>

<style lang="less" scoped>
.clz-img {
  width: 250px;
  &-stage {
    position: absolute;
    top: 30px;
    background-color: @orange;
    border: @orange solid 1px;
    border-radius: 0 10px 10px 0;
    padding: 2px 5px;
    font-size: 20px;
    color: @white;
  }
  > img {
    border-radius: 20px;
  }
}
</style>
