import { mount } from 'enzyme'
import React from 'react'
import Child from '@/components/Child.tsx'

const addCount = jest.fn()
const wrapper = mount(<Child addCount={addCount} count={123}></Child>)

test('Data binding props.count to count', () => {
  expect(wrapper.find('[data-test="count"]').text()).toEqual('123')
})

test('Click the add-count will call addCount', () => {
  expect(addCount.mock.calls[0]).toBeUndefined()

  wrapper.find('[data-test="add-count"]').simulate('click')

  expect(addCount).toBeCalled()
  expect(addCount.mock.calls[0]).toEqual([])
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
