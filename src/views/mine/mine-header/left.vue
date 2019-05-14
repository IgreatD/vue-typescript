<template>
  <avatar
    class="mine-hd-l"
    :avatar="userInfo && userInfo.HeadImage"
    size="60px"
  />
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import Avatar from '@/components/avatar/index.vue';
import { UserDataModel } from '@/types/models';
@Component({
  components: {
    Avatar,
  },
})
export default class LmMineHeader extends Vue {
  @Prop() private userInfo?: UserDataModel;
}
</script>

<style lang="less" scoped>
.mine-hd-l {
  margin-right: 40px;
}
</style>
