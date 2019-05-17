<template>
  <van-field
    v-model="value"
    clearable
    :error="error"
    :error-message="error?'请输入':''"
    @keyup.enter.native="updateUser"
  />
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator';
import app from '@/store/modules/app';
import user from '@/store/modules/user';
import debounce from 'lodash.debounce';
@Component
export default class LmUpdateUserInfoDetail extends Vue {
  private value: string = '';
  private key: string = '';
  private error: boolean = false;
  private validateValue = debounce(this.validate, 500);
  private mounted() {
    this.key = this.$route.query.key as string;
    this.value = this.$route.query.value as string;
    if (!this.key || !this.value) {
      this.$router.back();
    }
  }
  get action() {
    return app.action;
  }
  @Watch('value')
  private onValueChange() {
    this.validateValue();
  }
  @Watch('action')
  private onActionChange() {
    if (this.action === 'updateUserInfo') {
      app.setAction(undefined);
      this.updateUser();
    }
  }
  private updateUser() {
    if (!this.error) {
      user.updateUserInfo([this.key, this.value]).then(() => {
        this.$router.back();
      });
    }
  }

  private validate() {
    this.error = this.value === '';
  }
}
</script>
