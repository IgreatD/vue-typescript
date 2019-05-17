<template>
  <div class="referer-header van-hairline--bottom">
    <lm-flex
      direction="row"
      justify="space-between"
    >
      <h3 class="text-primary">{{clz.ClassName}}</h3>
      <span class="referer-header-name text-normal">{{`${clz.Stage} - ${clz.CourseInfoName}`}}</span>
    </lm-flex>
    <lm-flex
      class="referer-header-date"
      direction="row"
      justify="space-between"
    >
      <span class="text-normal">开课时间：{{clz.BeginDate | formatYMD}}</span>
    </lm-flex>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
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
  @Prop() private clz!: any;
}
</script>

<style lang="less" scoped>
.referer-header {
  padding: 20px;
  background: @white;
  &-name {
    color: @green;
  }
  &-date {
    padding-top: 20px;
  }
}
</style>
