<template>
  <button>{{ text }}</button>
</template>
<script>
export default {
  name: 'StoryBookSample',
  props: {
    text: {
      type: String,
      default: 'Sample',
    },
  },
}
</script>
