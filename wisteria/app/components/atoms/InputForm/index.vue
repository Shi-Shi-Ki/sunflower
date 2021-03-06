<template>
  <div class="input_form">
    <component :is="ifFrame">
      <InputFormFrame class="frame_image" />
      <input
        type="text"
        :class="'input_text-' + inputTextColor"
        placeholder=" "
      />
      <div
        class="placeholder_text"
        :class="'placeholder_bg_color-' + placeholderBgColor"
      >
        <slot />
      </div>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import InputFormFrame from '@/static/input_form.svg'

export default defineComponent({
  name: 'InputForm',
  components: {
    InputFormFrame,
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
    placeholderBgColor: {
      type: String,
      default: 'w',
    },
    inputTextColor: {
      type: String,
      default: 'w',
    },
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
