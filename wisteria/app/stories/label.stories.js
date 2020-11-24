import { text, select } from '@storybook/addon-knobs'
import Label from '../components/atoms/Label'

export default {
  title: 'Label',
  component: Label,
}

// export const Basic = (argTypes) => ({
export const Basic = () => ({
  components: { Label },
  props: {
    text: {
      type: String,
      // default: 'TEXT sample !!',
      default: text('text', '! TEXT sample !'),
    },
    className: {
      type: String,
      // default: 'textElement-h1',
      default: select(
        'style',
        { h1: 'textElement-h1', h2: 'textElement-h2' },
        'textElement-h1'
      ),
    },
  },
  template: `<Label :class="className" :text="text"/>`,
})
