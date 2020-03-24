import React from 'react'
import Header from '@/components/globals/Header'
import { render, cleanup, RenderResult } from '@testing-library/react'

let wrapper: RenderResult
beforeEach(() => {
  wrapper = render(<Header />)
})
afterEach(cleanup)

test('Match the snapshot', () => {
  expect(wrapper.asFragment()).toMatchSnapshot()
})
