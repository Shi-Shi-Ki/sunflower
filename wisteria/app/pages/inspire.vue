<template>
  <v-layout>
    <v-flex class="text-center">
      <p>
        <Label>{{ text }}</Label>
      </p>
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
export default defineComponent({
  components: {
    Label,
  },
  props: {
    text: {
      type: String,
      default: 'AAA',
    },
  },
})
</script>
