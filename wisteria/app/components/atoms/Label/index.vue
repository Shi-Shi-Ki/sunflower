<template>
  <component :is="label" class="label-h1"><slot></slot></component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: 'div',
    },
  },
})

/*
export default {
  name: 'TextElement',
  props: {
    text: {
      type: String,
      default: 'Sample',
    },
    className: {
      type: String,
      default: 'textElement-h1',
    },
  },
}
*/
</script>

<style lang="scss">
@mixin base_style($fontSize, $color) {
  font-family: 'Hiragino Kaku Gothic ProN';
  font-weight: normal;
  text-align: left;
  font-size: $fontSize;
  color: $color;
}
.label {
  &-h1 {
    @include base_style(40px, #f00);
  }
  &-h2 {
    @include base_style(20px, #000);
  }
}
</style>
