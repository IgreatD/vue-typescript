<template>
  <header>
    <van-nav-bar
      :title="title"
      :left-arrow="showLeft"
      :left-text="showLeft? '返回' : ''"
      :right-text="right && right.name"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon
        slot="right"
        v-if="right&&right.icon"
        :name="right.icon"
      ></van-icon>
    </van-nav-bar>
  </header>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavBar, Icon } from 'vant';
import IMetaTypes from '@/router/meta-types';
@Component({
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
})
export default class LmLayout extends Vue {
  @Prop() private meta!: IMetaTypes;

  private onClickLeft() {
    console.log('click left');
  }

  private onClickRight() {
    console.log('click right');
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
}
</script>
