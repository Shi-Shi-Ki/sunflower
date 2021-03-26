<template>
  <button
    class="base_button"
    :type="type"
    :aria-label="ariaLabel"
    :disabled="disabled"
    @click="onClick"
  >
    <slot :class="['base_button_slot-' + slotStyleOption]" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    slotStyleOption: {
      type: String,
      default: 'default',
    },
    type: {
      type: String,
      default: 'button',
    },
    onClick: {
      // callbackとして定義しておき呼び元で実装したものを呼ぶ
      type: Function,
      default: () => {},
    },
    ariaLabel: {
      // buttonに表示するラベルの標準要素
      type: String,
      default: 'BaseButton',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
