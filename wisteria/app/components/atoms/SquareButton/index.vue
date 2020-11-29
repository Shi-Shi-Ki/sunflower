<template>
  <component :is="sqButton" class="square_button">
    <ButtonImage />
    <div class="square_button_text"><slot /></div>
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ButtonImage from '/app/static/square_button.svg'

export default defineComponent({
  name: 'SquareButton',
  components: {
    ButtonImage,
  },
  props: {
    sqButton: {
      type: String,
      default: 'div',
    },
  },
})
</script>
<style lang="scss">
.square_button {
  position: relative;
  text-align: center;
  color: white;
}
.square_button_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
