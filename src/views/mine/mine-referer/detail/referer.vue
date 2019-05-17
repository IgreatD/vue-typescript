<template>
  <van-cell-group>
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      :error-text="errorText"
      finished-text="没有更多了"
      @load="getMyRefererReferer"
    >
      <template v-for="(referer, index) in referers">
        <van-cell
          :key="index"
          :title="referer.RefererName"
        >
          <span>招生人数：{{ referer.SpreadStudentCount }}</span>
        </van-cell>
      </template>
    </van-list>
  </van-cell-group>
</template>

<script lang='ts'>
import { Vue, Mixins, Component } from 'vue-property-decorator';
import LmList from '@/mixins/list';
import myReferer from '@/store/modules/myReferer';
import { MyRefererRecruitDataModel, MyRefererDataModel } from '@/types/models';
@Component
export default class RefererReferer extends Mixins(LmList) {
  private referers: MyRefererRecruitDataModel[] = [];
  private getMyRefererReferer() {
    this.loading = true;
    myReferer
      .getMyRefererReferer({
        MyRefererCode: (myReferer.referer as MyRefererDataModel).MyRefererCode,
        PageIndex: this.pageIndex,
        PageSize: this.pageSize,
      })
      .then((data) => {
        this.referers = this.referers!.concat(data.Data);
        this.completeLoad(data.Data.length);
      })
      .catch(() => {
        this.errorLoad();
      });
  }
}
</script>
