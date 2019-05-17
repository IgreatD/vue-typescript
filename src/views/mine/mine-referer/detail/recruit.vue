<template>
  <van-cell-group>
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      :error-text="errorText"
      finished-text="没有更多了"
      @load="getMyRefererRecurit"
    >
      <template v-for="(recurit, index) in recruits">
        <van-cell
          :key="index"
          :title="recurit.StudentName"
          :value="recurit.JoinPassDate | formatYMDHM"
        />
      </template>
    </van-list>
  </van-cell-group>
</template>

<script lang='ts'>
import { Vue, Mixins, Component } from 'vue-property-decorator';
import LmList from '@/mixins/list';
import { formatYMDHM } from '@/filters/formate-date';
import myReferer from '@/store/modules/myReferer';
import {
  MyRefererRecruitDataModel,
  MyRefererRecruitModel,
  MyRefererDataModel,
} from '@/types/models';
@Component({
  filters: {
    formatYMDHM,
  },
})
export default class RefererRecurit extends Mixins(LmList) {
  private recruits: MyRefererRecruitDataModel[] = [];
  private mounted() {
    this.getMyRefererRecurit();
  }
  private getMyRefererRecurit() {
    this.loading = true;
    myReferer
      .getMyRefererRecruit({
        MyRefererCode: (myReferer.referer as MyRefererDataModel).MyRefererCode,
        PageIndex: this.pageIndex,
        PageSize: this.pageSize,
      })
      .then((data) => {
        this.recruits = this.recruits!.concat(data.Data);
        this.completeLoad(data.Data.length);
      })
      .catch(() => {
        this.errorLoad();
      });
  }
}
</script>
