<template>
  <header>
    <van-nav-bar
      fixed
      :title="title"
      :left-arrow="showLeft"
      :left-text="showLeft? '返回' : ''"
      :right-text="right && right.name"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :z-index="10"
    >
      <van-icon
        slot="right"
        v-if="right&&right.icon"
        :name="right.icon"
      ></van-icon>
    </van-nav-bar>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { NavBar, Icon } from 'vant';
import IMetaTypes from '@/types/meta-types';
@Component({
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
})
export default class LmHeader extends Vue {
  @Prop() private meta!: IMetaTypes;

  private onClickLeft() {
    this.$router.back();
  }

  private onClickRight() {
    this.$router.push({
      name: this.action,
    });
  }

  get title() {
    return this.meta.title;
  }

  get right() {
    return this.meta.right;
  }

  get showLeft() {
    return this.meta.showLeft;
  }

  get action() {
    if (typeof this.right !== 'undefined') {
      return this.right.action;
    }
  }
}
</script>
