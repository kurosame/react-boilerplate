import React from 'react'
import Child from '@/components/Child'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(cleanup)

test('Data binding props.count to count', () => {
  const wrapper = render(<Child addCount={jest.fn()} count={123}></Child>)

  expect(wrapper.getByTestId('count')).toHaveTextContent('123')
})

test('Click the add-count will call addCount', () => {
  const addCount = jest.fn()
  const wrapper = render(<Child addCount={addCount} count={123}></Child>)

  expect(addCount.mock.calls[0]).toBeUndefined()

  fireEvent.click(wrapper.getByTestId('add-count'))

  expect(addCount).toBeCalled()
  expect(addCount.mock.calls[0]).toEqual([])
})

test('Match the snapshot', () => {
  const wrapper = render(<Child addCount={jest.fn()} count={123}></Child>)

  expect(wrapper.asFragment()).toMatchSnapshot()
})
