import { text, select } from '@storybook/addon-knobs'
import SquareButton from '../components/atoms/SquareButton'

export default {
  title: 'SquareButton',
  component: SquareButton,
}

const Template = (arg, { argTypes }) => ({
  components: { SquareButton },
  props: Object.keys(argTypes),
  template: `<SquareButton :styleName="styleName">{{ label }}</SquareButton>`,
})

export const Primary = Template.bind({})
Primary.args = { label: 'LOGIN', styleName: 'G' }
