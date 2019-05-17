<template>
  <lm-flex
    justify="space-between"
    class="referer-bottom text-normal"
  >
    <span>
      招生人数&emsp;<span>{{referer.RecruitStudentsCount}}</span>
    </span>
    <span>
      推广人数&emsp;<span>{{referer.SpreadCount}}</span>
    </span>
    <span>
      推广招生&emsp;<span>{{referer.SpreadStudentCount}}</span>
    </span>
  </lm-flex>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import LmFlex from '@/components/lm-flex/index.vue';
import { MyRefererDataModel } from '@/types/models';
@Component({
  components: {
    LmFlex,
  },
})
export default class LmMyRefererBottom extends Vue {
  @Prop() private referer!: MyRefererDataModel;
}
</script>

<style lang="less" scoped>
.referer-bottom {
  padding: 20px;
  > span > span {
    color: @green;
  }
}
</style>
