import { text, select } from '@storybook/addon-knobs'
import Label from '../components/atoms/Label'

export default {
  title: 'Label',
  component: Label,
}

const Template = (arg, { argTypes }) => ({
  components: { Label },
  props: Object.keys(argTypes),
  template: `<Label :styleName="styleName" :textColor="textColor">{{ text }}</Label>`,
})

export const Primary = Template.bind({})
Primary.args = { text: 'TEST', styleName: 'h1', textColor: '#000' }
