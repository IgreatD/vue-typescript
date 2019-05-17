<template>
  <div class="mine-settings">
    <van-cell-group>
      <template v-for="(label, index) in labels">
        <van-cell
          class="mine-settings-cell"
          :key="index"
          :title="label.title"
          :is-link="label.isLink"
          @click="index !==0 && updateUserInfo(label.key,label.value,`设置${label.title}`)"
        >
          <template v-if="index === 0">
            <avatar
              :avatar="label.value"
              size="42px"
              class="mine-settings-cell-avatar"
            />
            <lm-uploader @on-success="updateUserHeadImage" />
          </template>
          <template v-else>
            <span>{{label.value}}</span>
          </template>
        </van-cell>
      </template>
    </van-cell-group>
    <section class="mine-settings-logout">
      <van-button
        size="large"
        @click="logout"
      >
        退出登录
      </van-button>
    </section>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import user from '@/store/modules/user';
import Avatar from '@/components/avatar/index.vue';
import LmUploader from '@/components/lm-uploader/index.vue';
import {} from 'vuex-module-decorators';
export interface ILabelsTypes {
  title: string;
  isLink: boolean;
  key?: string;
  value: string;
}
@Component({
  components: {
    Avatar,
    LmUploader,
  },
})
export default class LmUserSettings extends Vue {
  get userInfo() {
    return user.userInfo;
  }
  get labels(): ILabelsTypes[] {
    return [
      {
        title: '头像',
        isLink: true,
        value: (this.userInfo && this.userInfo.HeadImage) || '',
      },
      {
        title: '昵称',
        isLink: true,
        key: 'Name',
        value: (this.userInfo && this.userInfo.Name) || '',
      },
      {
        title: '手机号',
        isLink: false,
        value: (this.userInfo && this.userInfo.UserName) || '',
      },
      {
        title: '备注',
        isLink: true,
        key: 'Remark',
        value: (this.userInfo && this.userInfo.Remark) || '',
      },
    ];
  }

  private updateUserInfo(key: string, value: string, title: string): void {
    this.$router.push({
      name: 'UserUpdate',
      query: {
        key,
        value,
        title,
      },
    });
  }

  private updateUserHeadImage(headUrl: string) {
    user.updateUserInfo(['HeadImage', headUrl]);
  }

  private logout() {
    user.logout().then(() => {
      this.$router.replace('/');
    });
  }
}
</script>

<style lang="less" scoped>
.mine-settings {
  &-cell {
    justify-content: space-between;
    align-items: center;
    &-avatar {
      float: right;
      clear: both;
    }
  }
  &-logout {
    padding-top: 50px;
  }
}
</style>
