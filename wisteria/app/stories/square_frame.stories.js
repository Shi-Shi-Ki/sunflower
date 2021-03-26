import { text, select } from '@storybook/addon-knobs'
import SquareFrame from '../components/atoms/SquareFrame'

export default {
  title: 'SquareFrame',
  component: SquareFrame,
}

const Template = (arg, { argTypes }) => ({
  components: { SquareFrame },
  props: Object.keys(argTypes),
  template: '<SquareFrame :styleName="styleName">{{ text }}</SquareFrame>',
})

export const Primary = Template.bind({})
Primary.args = { text: 'TEST', styleName: 'M' }
