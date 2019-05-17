<template>
  <van-cell-group>
    <van-cell
      title="我的推广"
      is-link
      :to="{name:'MyReferer'}"
      :value="userInfo && userInfo.MyRefererClassCount || ''"
    />
    <van-cell
      title="我的课程"
      value="0"
    />
    <van-cell
      title="我的收藏"
      value="0"
    />
  </van-cell-group>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { UserDataModel } from '@/types/models';
@Component
export default class LmMineBody extends Vue {
  @Prop() private userInfo?: UserDataModel;
}
</script>
