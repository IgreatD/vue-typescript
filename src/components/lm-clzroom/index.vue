<template>
  <div class="clz">
    <template v-for="(clz, index) in clzes">
      <div
        :key="index"
        class="clz-box"
      >
        <lm-flex>
          <clzroom-left :clz="clz" />
          <clzroom-right :clz="clz" />
        </lm-flex>
        <clzroom-bottom :clz="clz" />
      </div>
    </template>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import clzroom from '@/store/modules/clzroom';
import { ClzroomDataModel } from '@/types/models';
import LmFlex from '@/components/lm-flex/index.vue';
import ClzroomLeft from './left.vue';
import ClzroomRight from './right.vue';
import ClzroomBottom from './bottom.vue';
@Component({
  components: {
    LmFlex,
    ClzroomLeft,
    ClzroomRight,
    ClzroomBottom,
  },
})
export default class LmClzroom extends Vue {
  private clzes: ClzroomDataModel[] = [];
  public mounted() {
    clzroom
      .getClzList({
        PeriodSort: 1,
        PageIndex: 0,
        PageSize: 10,
      })
      .then((data) => {
        this.clzes = data.Data;
      });
  }
}
</script>

<style lang="less" scoped>
.clz {
  &-box {
    padding: 30px;
    background: @white;
    margin-bottom: 10px;
  }
}
</style>
