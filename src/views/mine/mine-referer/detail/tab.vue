<template>
  <van-tabs v-model="active">
    <template v-for="(tab, index) in tabs">
      <van-tab
        :key="index"
        :title="tab.name"
      >
        <component :is="tab.component" />
      </van-tab>
    </template>
  </van-tabs>
</template>

<script lang='ts'>
interface ITabTypes {
  name: string;
  component: 'recruit' | 'referer';
}
import { Vue, Component } from 'vue-property-decorator';
import { Tabs, Tab } from 'vant';
import recruit from './recruit.vue';
import referer from './referer.vue';
@Component({
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    recruit,
    referer,
  },
})
export default class MyRefererDetailTab extends Vue {
  private active = 0;
  get tabs(): ITabTypes[] {
    return [
      {
        name: '招生人数',
        component: 'recruit',
      },
      {
        name: '推广人数',
        component: 'referer',
      },
    ];
  }
}
</script>
