<template>
  <lm-flex
    class="clz-bd text-normal"
    direction="column"
    justify="space-between"
  >
    <span class="text-primary">{{clz.Name}}</span>
    <span>讲师：{{clz.TeacherName}}</span>
    <span
      v-if="clz.TeacherRankCode"
      class="clz-bd-rank"
    >职称：{{clz.TeacherRankCode}}</span>
    <span>开课时间：{{clz.BeginDate | formatYMD}}</span>
  </lm-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ClzroomDataModel } from '@/types/models';
import { formatYMD } from '@/filters/formate-date';
import LmFlex from '@/components/lm-flex/index.vue';
@Component({
  components: {
    LmFlex,
  },
  filters: {
    formatYMD,
  },
})
export default class LmClzroomRight extends Vue {
  @Prop() private clz?: ClzroomDataModel;
}
</script>

<style lang="less" scoped>
.clz-bd {
  padding-left: 30px;
  &-rank {
    color: @blue;
  }
}
</style>
