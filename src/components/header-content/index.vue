<template>
  <div class="flexs">
    <div class="flexs-item1">中</div>
    <div class="flexs-item2">flex-item2</div>
    <div class="flexs-item3">flex-item3</div>
    <div class="flexs-item4">flex-item4</div>
  </div>
</template>

<style lang="less" scoped>
.flexs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  // align-items: stretch;
  > div {
    padding: 10px;
    color: #fff;
    text-align: center;
  }
  &-item1 {
    background: @red;
    flex-grow: 1;
    order: 2;
  }
  &-item2 {
    background: @green;
    height: 100px;
    order: 1;
  }
  &-item3 {
    background: @black;
    order: 4;
  }
  &-item4 {
    background: @orange;
    order: 3;
  }
}
</style>
