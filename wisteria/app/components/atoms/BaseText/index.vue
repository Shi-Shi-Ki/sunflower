<template>
  <component :is="tagType" :class="['base_text-' + fontStyle + '-' + fontColor]"
    ><slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    fontStyle: {
      type: String,
      default: 'h4',
    },
    fontColor: {
      type: String,
      default: 'w',
    },
    tagType: {
      type: String,
      default: 'p',
    },
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>

