<template>
  <div id="square_frame">
    <component
      :is="sqFrame"
      :class="'sqframe-' + styleName"
      >
      <FrameImage id="square_frame_image" />
      <div id="square_frame_area"><slot /></div>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import FrameImage from '/app/static/square_frame.svg'

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
    styleName: {
      type: String,
      default: 'M',
    }
  },
})
</script>

<style lang="scss">
@mixin base_style($wid, $hei) {
  #square_frame_image {
    width: $wid + 10px;
    height: $hei + 10px;
    margin: 1em 0;
    & > g {
      stroke-width: 5px;
      stroke: #ff8900;
    }
    & > g rect {
      width: #{$wid}px;
      height: #{$hei}px;
    }
  }
  #square_frame_area {
    position: absolute;
    width: $wid - 70px;
    height: $hei - 70px;
    top: 50px;
    left: 40px;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
}
#square_frame {
  position: relative;
}
.sqframe {
  &-M {
    @include base_style(500, 500);
  }
  &-L {
    @include base_style(700, 700);
  }
}
</style>
