import { shallow } from 'enzyme'
import React from 'react'
import Parent from '@/containers/Parent.tsx'

const wrapper = shallow(<Parent />)

test('Match the snapshot', () => {
  expect(wrapper.debug()).toMatchSnapshot()
})
