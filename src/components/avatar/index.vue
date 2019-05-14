<template>
  <div
    class="avatar-content"
    aspectratio
    :style="{width:size,height:size}"
  >
    <img
      :src="avatar"
      aspectratio-content
    >
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class Avatar extends Vue {
  @Prop({ default: '36px' }) private size!: string;
  @Prop({
    default: 'https://keyushijian-1257034971.cos.ap-shanghai.myqcloud.com/ft/image/logo.jpg',
  })
  private avatar?: string;
}
</script>

<style lang="less" scoped>
.avatar-content {
  & > img {
    border-radius: 50%;
  }
}
</style>
