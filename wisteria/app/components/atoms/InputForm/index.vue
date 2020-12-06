<template>
  <div id="input_frame">
    <component
      :is="ifFrame"
      :class="'ifframe-' + styleName"
      >
      <InputFormFrame id="input_frame" />
      <div id="placeholder_text"><slot /></div>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import InputFormFrame from '/app/static/input_form.svg'

export default defineComponent({
  name: 'InputForm',
  components: {
    InputFormFrame
  },
  props: {
    ifFrame: {
      type: String,
      default: 'div',
    },
    styleName: {
      type: String,
      default: 'normal',
    },
  },
})
</script>

<style lang="scss">
@mixin base_style($fontColor) {
  #placeholder_text {
    position: absolute;
    width: auto;
    height: auto;
    top: 19px;
    left: 19px;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    color: $fontColor;
  }
}
#input_frame {
  position: relative;
}
.ifframe {
  &-normal {
    @include base_style(#ccc)
  }
}
</style>
