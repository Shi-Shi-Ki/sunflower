import { text, select } from '@storybook/addon-knobs'
import BaseText from '../components/atoms/BaseText'

export default {
  title: 'BaseText',
  component: BaseText,
}

const Template = (arg, { argTypes }) => ({
  components: { BaseText },
  props: Object.keys(argTypes),
  template: `<BaseText :tagType="tagType" :fontStyle="fontStyle" :fontColor="fontColor">{{ text }}</BaseText>`,
})

export const Primary = Template.bind({})
Primary.args = {
  text: 'base text',
  fontStyle: 'h1',
  fontColor: 'k',
  tagType: 'p'
}

