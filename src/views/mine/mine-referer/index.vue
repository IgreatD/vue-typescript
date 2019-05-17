<template>
  <div class="referer">
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      :error-text="errorText"
      finished-text="没有更多了"
      @load="getMyReferer"
    >
      <template v-for="(referer, index) in referers">
        <div
          class="referer-box"
          :key="index"
          @click="detail(referer)"
        >
          <my-referer-header :clz="referer" />
          <my-referer-bottom :referer="referer" />
        </div>
      </template>
    </van-list>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Mixins } from 'vue-property-decorator';
import LmList from '@/mixins/list';
import { MyRefererDataModel } from '@/types/models';
import myReferer from '@/store/modules/myReferer';
import LmFlex from '@/components/lm-flex/index.vue';
import MyRefererBottom from './bottom.vue';
import MyRefererHeader from '@/components/lm-business/clz-header.vue';
import { formatYMD } from '@/filters/formate-date';
@Component({
  components: {
    LmFlex,
    MyRefererBottom,
    MyRefererHeader,
  },
  filters: {
    formatYMD,
  },
})
export default class LmMineReferer extends Mixins(LmList) {
  private referers: MyRefererDataModel[] = [];
  private getMyReferer() {
    this.loading = true;
    myReferer
      .getMyReferer({
        PageIndex: this.pageIndex,
        PageSize: this.pageSize,
      })
      .then((data) => {
        this.referers = this.referers.concat(data.Data);
        this.completeLoad(data.Data.length);
      })
      .catch(() => {
        this.errorLoad();
      });
  }
  private detail(referer: MyRefererDataModel) {
    myReferer.setReferer(referer);
    this.$router.push({
      name: 'MyRefererDetail',
    });
  }
}
</script>

<style lang="less" scoped>
.referer-box {
  background: @white;
  margin-bottom: 10px;
}
</style>
