import React from 'react'
import Header from '@/components/globals/Header'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

test('Match the snapshot', () => {
  const wrapper = render(<Header />)

  expect(wrapper.asFragment()).toMatchSnapshot()
})
