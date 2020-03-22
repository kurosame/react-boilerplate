import React from 'react'
import Header from '@/components/globals/Header'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

const wrapper = render(<Header />)

test('Match the snapshot', () => {
  expect(wrapper.asFragment()).toMatchSnapshot()
})
