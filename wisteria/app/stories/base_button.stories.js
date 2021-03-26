import { text, select } from '@storybook/addon-knobs'
import BaseButton from '../components/atoms/BaseButton'

export default {
  title: 'BaseButton',
  component: BaseButton,
}

const Template = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: `<BaseButton
    :type="type"
    :ariaLabel="ariaLabel"
    :slotStyleOption="slotStyleOption"
    :disabled="disabled"
    :onClick="onClick" />`,
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'button',
  ariaLabel: 'LOGIN',
  slotStyleOption: 'default',
  disabled: false,
  onClick: () => {
    console.log("base button click!")
  }
}
