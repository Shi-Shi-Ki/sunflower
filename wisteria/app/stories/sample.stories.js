import { action } from '@storybook/addon-actions'
import StoryBookSample from '../components/atoms/StoryBookSample'

export default {
  title: 'StoryBookSample',
  component: StoryBookSample,
}
// export const Basic = (args, { argTypes }) => ({
export const Basic = (argTypes) => ({
  components: { StoryBookSample },
  template: '<StoryBookSample @click.native="onClick" :text="text"/>',
  props: Object.keys(argTypes),
  methods: { onClick: action('button-clicked') },
})
