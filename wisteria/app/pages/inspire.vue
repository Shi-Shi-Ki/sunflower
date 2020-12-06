<template>
  <v-layout>
    <v-flex class="text-center">
      <p>
        <Label>{{ text }}</Label>
      </p>
      <div class="sample_btn">
        <SampleButton />
        <div class="btn_label">
          <Label>{{ text }}</Label>
        </div>
      </div>
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Label from '~/components/atoms/Label/index.vue'
import SampleButton from '~/static/square_button.svg'
export default defineComponent({
  components: {
    Label,
    SampleButton,
  },
  props: {
    text: {
      type: String,
      default: 'TEST',
    },
  },
})
</script>
<style lang="scss">
.sample_btn {
  position: relative;
  text-align: center;
  color: white;
}
.btn_label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
