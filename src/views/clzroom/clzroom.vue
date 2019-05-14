<template>
  <lm-clzroom />
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import LmClzroom from '@/components/lm-clzroom/index.vue';
@Component({
  components: {
    LmClzroom,
  },
})
export default class Clzroom extends Vue {}
</script>

