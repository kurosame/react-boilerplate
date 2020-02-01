import { mount } from 'enzyme'
import React from 'react'
import Header from '@/components/globals/Header'

const wrapper = mount(<Header />)

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
