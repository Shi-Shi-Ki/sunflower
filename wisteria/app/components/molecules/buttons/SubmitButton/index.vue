<template>
  <BaseButton
    :type="type"
    :aria-label="buttonLabel"
    :disabled="disabled"
    :on-click="apiLoader"
  >
    <BaseText v-if="!!buttonLabel" :class="[fontStyle, fontColor]"
      >{{ buttonLable }}
    </BaseText>
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { BaseButton } from '~/components/atoms/BaseButton'
import { BaseText } from '~/components/atoms/BaseText'

interface Props {
  type: string
  buttonLable: string
  disabled: boolean
  onClick: Function
  fontStyle: string
  fontColor: string
}

export default defineComponent({
  components: {
    BaseButton,
    BaseText,
  },
  prop: {
    type: {
      type: String,
      default: 'submit',
    },
    buttonLable: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
      require: true,
    },
    fontStyle: {
      type: String,
      default: 'h4',
    },
    fontColor: {
      type: String,
      default: 'w',
    },
  },
  setup(props: Props) {
    const isWaiting = ref(false)
    const isSuccess = ref(false)
    const errorMessage = ref('')

    const apiLoader = async () => {
      try {
        isWaiting.value = true
        const result = await props.onClick()
        isWaiting.value = false
        if (!!result && result.status === 200) {
          isSuccess.value = true
        } else {
          errorMessage.value = result.errorMessage
        }
      } catch(e) {
        console.log(e)
      }
    }

    return {
      apiLoader,
      isWaiting,
      isSuccess,
      errorMessage,
    }
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
