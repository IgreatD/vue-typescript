<template>
  <div class="referer-header">
    <lm-flex
      direction="row"
      justify="space-between"
    >
      <h3 class="text-primary">{{referer.ClassName}}</h3>
      <span class="referer-header-name text-normal">{{`${referer.Stage} - ${referer.CourseInfoName}`}}</span>
    </lm-flex>
    <lm-flex
      direction="row"
      justify="space-between"
    >
      <span class="text-normal">开课时间：{{referer.BeginDate | formatYMD}}</span>
    </lm-flex>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { MyRefererDataModel } from '@/types/models';
import LmFlex from '@/components/lm-flex/index.vue';
import { formatYMD } from '@/filters/formate-date';
@Component({
  components: {
    LmFlex,
  },
  filters: {
    formatYMD,
  },
})
export default class LmMineReferer extends Vue {
  @Prop() private referer!: MyRefererDataModel;
}
</script>

<style lang="less" scoped>
.referer-header {
  &-name {
    color: @green;
  }
}
</style>
