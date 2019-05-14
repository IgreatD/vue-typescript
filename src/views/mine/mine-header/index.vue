<template>
  <div class="mine-hd">
    <lm-flex :align="userInfo.Name? '' : 'center'">
      <header-left :user-info="userInfo" />
      <template v-if="userInfo.Name">
        <header-right :user-info="userInfo" />
      </template>
      <template v-else>
        <van-button
          type="primary"
          plain
          round
          @click="login"
        >
          <span>登录 / 注册</span>
        </van-button>
      </template>
    </lm-flex>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Inject, Prop } from 'vue-property-decorator';
import { UserDataModel } from '@/types/models';
import LmFlex from '@/components/lm-flex/index.vue';
import HeaderRight from './right.vue';
import HeaderLeft from './left.vue';
import loginMixin from '@/mixins/login';
@Component({
  components: {
    LmFlex,
    HeaderLeft,
    HeaderRight,
  },
  mixins: [loginMixin],
})
export default class LmMineHeader extends Vue {
  @Prop() private userInfo?: UserDataModel;
}
</script>

<style lang="less" scoped>
.mine-hd {
  background: @green;
  padding: 30px;
  color: #fff;
  margin-bottom: 30px;
}
</style>
