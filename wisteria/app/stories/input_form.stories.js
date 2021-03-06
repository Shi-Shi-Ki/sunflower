import { text } from '@storybook/addon-knobs'
import InputForm from '../components/atoms/InputForm'

export default {
  title: 'InputForm',
  component: InputForm,
}

const Template = (arg, { argTypes }) => ({
  components: { InputForm },
  props: Object.keys(argTypes),
  template: '<InputForm>{{ placeholder_text }}</InputForm>',
})

export const Primary = Template.bind({})
Primary.args = { placeholder_text: 'LOGIN ID', }