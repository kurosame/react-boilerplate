import React from 'react'
import Child from '@/components/Child'
import {
  render,
  fireEvent,
  cleanup,
  RenderResult
} from '@testing-library/react'
import '@testing-library/jest-dom'

let mockAddCount: jest.Mock
let wrapper: RenderResult
beforeEach(() => {
  mockAddCount = jest.fn()
  wrapper = render(<Child addCount={mockAddCount} count={123}></Child>)
})
afterEach(() => {
  cleanup()
  jest.restoreAllMocks()
})

test('Data binding `props.count` to `count`', () => {
  expect(wrapper.getByTestId('count')).toHaveTextContent('123')
})

test('Click `add-count` will call `addCount`', () => {
  fireEvent.click(wrapper.getByTestId('add-count'))

  expect(mockAddCount).toBeCalled()
})

test('Match the snapshot', () => {
  expect(wrapper.asFragment()).toMatchSnapshot()
})
