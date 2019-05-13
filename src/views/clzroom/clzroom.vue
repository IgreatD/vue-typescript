<template>
  <div class="clz">
    <!-- {{clzes}} -->
    <template v-for="(item, index) in clzes">
      <div
        class="clz-box van-hairline--bottom index-main"
        :key="index"
      >
        <section class="clz-content index-line">
          <div
            w-25-18
            aspectratio
            class="clz-hd"
          >
            <img
              v-lazy="item.CoverPath"
              aspectratio-content
            />
          </div>
          <div class="index-main clz-bd text-normal">
            <span class="text-primary">{{item.Name}}</span>
            <span>讲师：{{item.TeacherName}}</span>
            <span
              v-if="item.TeacherRankCode"
              class="clz-bd-rank"
            >职称：{{item.TeacherRankCode}}</span>
            <span>开课时间：{{item.BeginDate | formatYMD}}</span>
          </div>
        </section>
        <div class="clz-ft index-line text-normal">
          <span class="clz-ft-price">{{ `￥${item.LessonPrice /2}` }}/课时</span>
          <span>{{ `共${item.LessonNumber *2}课时` }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import clzroom from '@/store/clzroom';
import { ClzroomDataModel } from '@/models/ClzroomModel';
import { IClzroomTypes } from '@/api/clzroom-types';
import { formatYMD } from '@/filters/formate-date';
@Component({
  filters: {
    formatYMD,
  },
})
export default class Clzroom extends Vue {
  private clzes: ClzroomDataModel[] = [];
  public mounted() {
    getModule(clzroom)
      .getClzList({
        PageIndex: 0,
        PageSize: 10,
      })
      .then((data) => {
        this.clzes = data.Data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>

<style lang="less" scoped>
@import './clzroom';
</style>
