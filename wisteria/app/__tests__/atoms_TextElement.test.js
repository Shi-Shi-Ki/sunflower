import { mount } from '@vue/test-utils'
import Component from '@/components/atoms/TextElement.vue'

describe('Testing App component', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance).toBeTruthy()
  })
})
