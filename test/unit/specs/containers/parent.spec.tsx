import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Parent from '@/containers/Parent.tsx'
import { CounterState } from '@/modules/counter.ts'
import { States } from '@/modules/states.ts'

const state: { counter: CounterState } = {
  counter: { count: 12, sagaCount: 34 }
}
const states: States = { counter: state.counter }

const wrapper = mount(
  <Provider store={configureStore<States>()(states)}>
    <Parent />
  </Provider>
)

test('Match the snapshot', () => {
  wrapper
    .find('[data-test="add-count"]')
    .first()
    .simulate('click')
  wrapper
    .find('[data-test="add-count"]')
    .last()
    .simulate('click')

  expect(wrapper.html()).toMatchSnapshot()
})
