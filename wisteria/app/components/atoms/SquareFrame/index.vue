<template>
  <div :class="['square_frame', 'frame_type-' + frameType]">
    <FrameImage class="square_frame_image" />
    <div class="square_frame_area"><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import FrameImage from '@/static/square_frame.svg'

export default defineComponent({
  name: 'SquareFrame',
  components: {
    FrameImage,
  },
  props: {
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
