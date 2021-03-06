import { text, select } from '@storybook/addon-knobs'
import { BaseText } from '../components/atoms/BaseText'
import { BaseButton } from '../components/atoms/BaseButton'
import { SubmitButton } from '../components/molecules/button/SubmitButton'

export default {
  title: 'SubmitButton',
  component: SubmitButton,
}

const Template = (arg, { argTypes }) => ({
  components: { SubmitButton },
  props: Object.keys(argTypes),
  template: `<SubmitButton
    :type="type"
    :buttonLabel="buttonLabel"
    :disabled="disabled"
    :onClick="onClick"
    :fontStyle="fontStyle"
    :fontColor="fontColor" />`,
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'button',
  buttonLabel: 'Submit Button',
  disabled: false,
  onClick: () => {
    console.log("submit button click!")
  }
  fontStyle: 'h4',
  fontColor: 'w'
}