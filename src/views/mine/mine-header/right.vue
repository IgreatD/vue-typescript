<template>
  <lm-flex
    class="mine-hd-r"
    direction="column"
    justify="space-between"
  >
    <span class="mine-hd-r-name">{{userInfo.Name}}</span>
    <lm-flex
      justify="space-between"
      class="mine-hd-r-b"
    >
      <span class="mine-hd-r-b-balance">我的收益(元)：<span>{{userInfo.Balance}}</span></span>
      <span class="mine-hd-r-b-detail">点击查看</span>
    </lm-flex>
  </lm-flex>
</template>

<script lang='ts'>
import { Vue, Component, Inject, Prop } from 'vue-property-decorator';
import { UserDataModel } from '@/types/models';
import LmFlex from '@/components/lm-flex/index.vue';
@Component({
  components: {
    LmFlex,
  },
})
export default class LmMineHeader extends Vue {
  @Prop() private userInfo?: UserDataModel;
}
</script>

<style lang="less" scoped>
.mine-hd-r {
  flex: 1;
  &-name {
    font-size: 35px;
    font-weight: 500;
  }
  &-b {
    font-size: 28px;
    &-balance {
      > span {
        color: @lime-500;
        font-size: 30px;
        font-weight: 500;
      }
    }
    &-detail {
      color: @lime-500;
    }
  }
}
</style>
