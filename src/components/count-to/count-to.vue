<template>
  <div class="count-to-wrapper">
    <slot name="left" />
    <p class="content-outer">
      <span
        :class="['count-to-count-text',countClass]"
        :id="counterId"
      >
        {{init}}
      </span>
      <i :class="['count-to-unit-text',unitClass]">
        {{unitText}}
      </i>
    </p>
  </div>
</template>

<script lang="ts">
import uuid from '@/lib/uuid';
import { Component, Prop, Vue, Provide, Watch } from 'vue-property-decorator';
import CountUp from 'countup';
@Component
export default class CountTo extends Vue {
  @Prop({ default: 0 }) private init!: number;
  @Prop({ default: 0 }) private startVal!: number;
  @Prop() private end!: number;
  @Prop({ default: 0 }) private decimals!: number;
  @Prop({ default: '.' }) private decimal!: string;
  @Prop({ default: 2 }) private duration!: number;
  @Prop({ default: 0 }) private delay!: number;
  @Prop({ default: false }) private uneasing!: boolean;
  @Prop({ default: false }) private useGroup!: boolean;
  @Prop({ default: ',' }) private separator!: string;
  @Prop({ default: false }) private simplify!: boolean;
  @Prop({ default: () => [[3, 'K+'], [6, 'M+'], [9, 'B+']] })
  private unit!: Array<[number, string]>;
  @Prop() private countClass?: string;
  @Prop() private unitClass?: string;

  @Provide() private counter?: any;
  @Provide() private unitText?: string = '';
  @Provide() private uid: string = uuid();

  public get counterId(): string {
    return `count-to-${this.uid}`;
  }

  private getHandleVal(val: number, len: number) {
    return {
      endVal: val / Math.pow(10, this.unit[len - 1][0]),
      unitText: this.unit[len - 1][1],
    };
  }

  private transformValue(val: number) {
    const len = this.unit.length;
    let res = {
      endVal: 0,
      unitText: '',
    };
    if (val < Math.pow(10, this.unit[0][0])) {
      res.endVal = val;
    } else {
      for (let i = 1; i < len; i++) {
        if (val >= Math.pow(10, this.unit[i - 1][0]) && val < Math.pow(10, this.unit[i][0])) {
          res = this.getHandleVal(val, i);
        }
      }
    }
    if (val > Math.pow(10, this.unit[len - 1][0])) {
      res = this.getHandleVal(val, len);
    }
    return res;
  }

  private getValue(val: number) {
    let res = 0;
    if (this.simplify) {
      const { endVal, unitText } = this.transformValue(val);
      this.unitText = unitText;
      res = endVal;
    } else {
      res = val;
    }
    return res;
  }

  @Watch('end')
  private update(newVal: number) {
    const endVal = this.getValue(newVal);
    this.counter.update(endVal);
  }

  private mounted() {
    this.$nextTick(() => {
      const endVal = this.getValue(this.end);
      const options = {
        useEasing: !this.uneasing,
        useGrouping: this.useGroup,
        separator: this.separator,
        decimal: this.decimal,
      };
      this.counter = new (CountUp as any)(
        this.counterId,
        this.startVal,
        endVal,
        this.decimals,
        this.duration,
        options,
      );
      setTimeout(() => {
        if (this.counter) {
          this.counter.start();
        }
      }, this.delay);
    });
  }
}
</script>

<style lang="less" scoped>
@import './index';
</style>
