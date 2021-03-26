<template>
  <div class="square_button" @click="submit">
    <component :is="buttonSize"></component>
    <div class="square_button_text"><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'SquareButton',
  components: {
    middleBtn: () => import('~/static/square_button-m-g.svg'),
  },
  props: {
    buttonSize: {
      type: String,
      default: 'middleBtn',
    },
    buttonColor: {
      type: String,
      default: 'g',
    },
  },
  setup() {
    const submit = () => console.log('press submit button!')

    return {
      submit,
    }
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
