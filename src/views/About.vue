<template>
  <div class="about">
    <van-button type="primary">about page</van-button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { Button } from 'vant';
@Component({
  components: { [Button.name]: Button },
})
export default class About extends Vue {}
</script>
