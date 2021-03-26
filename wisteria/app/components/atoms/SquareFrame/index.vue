<template>
  <div :class="['square_frame', 'frame_type-' + frameType]">
    <component :is="frImage" class="square_frame_image"></component>
    <div class="square_frame_area"><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'SquareFrame',
  components: {
    frameImage: () => import('~/static/square_frame.svg'),
  },
  props: {
    frImage: {
      type: String,
      default: 'frameImage',
    },
    sqFrame: {
      type: String,
      default: 'div',
    },
    frameType: {
      type: String,
      default: 'M',
    },
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
