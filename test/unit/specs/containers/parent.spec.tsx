import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Parent from '@/containers/Parent'
import { CounterState } from '@/modules/counter'
import { States } from '@/modules/states'
import { render, fireEvent, cleanup } from '@testing-library/react'

afterEach(cleanup)

test('Match the snapshot', () => {
  const state: { counter: CounterState } = {
    counter: { count: 12, sagaCount: 34 }
  }
  const states: States = { counter: state.counter }
  const wrapper = render(
    <Provider store={configureStore<States>()(states)}>
      <Parent />
    </Provider>
  )
  wrapper.getAllByTestId('add-count').forEach(el => fireEvent.click(el))

  expect(wrapper.asFragment()).toMatchSnapshot()
})
