<template>
  <lm-close>
    <div class="login-box">
      <h3>{{ loginTip }}</h3>
      <van-cell-group>
        <van-field
          v-model="userName"
          clearable
          type="tel"
          placeholder="请输入手机号"
          :error="errorUserName"
          maxlength="11"
          autofocus
        />
        <van-field
          v-model="password"
          clearable
          type="password"
          placeholder="请输入密码"
          :error="errorPassword"
        />
      </van-cell-group>
      <section class="login-box-bt">
        <van-button
          size="large"
          type="primary"
          round
          :loading="loading"
          loading-text="登录中..."
          @click="login"
          :disabled="!disabledLogin"
        >
          登录
        </van-button>
      </section>
    </div>
  </lm-close>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { CellGroup, Field, Button } from 'vant';
import LmClose from '@/components/lm-close/index.vue';
import user from '@/store/modules/user';
import { getModule } from 'vuex-module-decorators';
import debounce from 'lodash.debounce';
import md5 from 'js-md5';
@Component({
  components: {
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Field.name]: Field,
    LmClose,
  },
})
export default class LmLogin extends Vue {
  private userName: string = '';
  private password: string = '';
  private errorUserName: boolean = false;
  private errorPassword: boolean = false;
  private disabledLogin = false;
  private loading = false;
  private loginTip: string = '账号密码登录';
  private validateInput = debounce(this.validate, 500);
  @Watch('userName')
  private onUserNameChange() {
    this.validateInput();
  }

  @Watch('password')
  private onPasswordChange() {
    this.validateInput();
  }

  get redirect() {
    return this.$route.query.redirect;
  }

  private login() {
    this.loading = true;
    user
      .login({
        UserName: this.userName,
        Password: md5(this.password),
        TimeSpan: parseInt((new Date().getTime() / 1000).toString(), 10),
      })
      .then(() => {
        if (this.redirect) {
          this.$router.replace(this.redirect as string);
        } else {
          this.$router.back();
        }
      })
      .catch((err) => {
        this.$toast('登录失败，请重试！');
      })
      .finally(() => {
        this.loading = false;
      });
  }

  private validate() {
    this.disabledLogin = this.userName.length === 11 && this.password.length >= 6;
  }
}
</script>

<style lang="less" scoped>
.login-box {
  padding: 0 20px;
  > h3 {
    text-align: center;
    padding: 20px 0;
  }
  &-bt {
    padding-top: 50px;
  }
}
</style>
