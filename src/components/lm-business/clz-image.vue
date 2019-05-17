<template>
  <lm-flex
    class="clz-image van-hairline--bottom"
    justify="space-between"
  >
    <lm-flex>
      <avatar
        size="42px"
        :avatar="clz.TeacherHeadImage"
      />
      <lm-flex
        direction="column"
        align="center"
        class="clz-image-name text-primary"
        justify="space-between"
      >
        <span class="clz-image-name-tip">主讲</span>
        <span class="clz-image-name-n">{{ clz.TeacherName }}</span>
      </lm-flex>
    </lm-flex>
    <lm-flex
      align="center"
      direction="column"
      justify="space-between"
      class="text-primary"
    >
      <span>
        {{ `共${clz.LessonNumber *2}课时` }}
      </span>
      <span class="clz-image-price">
        ￥{{ clz.LessonPrice /2 }}/课时
      </span>
    </lm-flex>
  </lm-flex>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import Avatar from '@/components/avatar/index.vue';
import LmFlex from '@/components/lm-flex/index.vue';
@Component({
  components: {
    Avatar,
    LmFlex,
  },
})
export default class LmClzImage extends Vue {
  @Prop() private clz?: any;
}
</script>

<style lang="less" scoped>
.clz-image {
  padding: 20px;
  background: @white;
  &-name {
    padding-left: 20px;
    &-n {
      color: @green;
    }
  }
  &-price {
    color: @green;
  }
}
</style>
