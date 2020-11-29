<template>
  <component
    :is="label"
    :class="'label-' + styleName"
    :style="{ color: textColor }"
    ><slot></slot
  ></component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: 'div',
    },
    styleName: {
      type: String,
      default: 'h1',
    },
    textColor: {
      type: String,
      default: '#000',
    },
  },
})
</script>

<style lang="scss">
@mixin base_style($fontSize) {
  font-family: 'Hiragino Kaku Gothic ProN';
  font-weight: normal;
  text-align: left;
  font-size: #{$fontSize}px;
}
.label {
  &-h1 {
    @include base_style(40);
  }
  &-h2 {
    @include base_style(20);
  }
  &-h3 {
    @include base_style(15);
  }
}
</style>
