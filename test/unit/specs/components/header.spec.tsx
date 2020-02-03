import { mount } from 'enzyme'
import React from 'react'
import Header from '@/components/globals/Header.tsx'

const wrapper = mount(<Header />)

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
