import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Parent from '@/containers/Parent'
import { CounterState, ADD_COUNT, GET_SAGA_COUNT } from '@/modules/counter'
import { States } from '@/modules/states'
import {
  render,
  fireEvent,
  cleanup,
  RenderResult
} from '@testing-library/react'

let mockDispatch: jest.Mock
let wrapper: RenderResult
beforeEach(() => {
  const state: { counter: CounterState } = {
    counter: { count: 12, sagaCount: 34 }
  }
  const states: States = { counter: state.counter }
  const store = configureStore<States>()(states)
  mockDispatch = jest.fn()
  store.dispatch = mockDispatch
  wrapper = render(
    <Provider store={store}>
      <Parent />
    </Provider>
  )
})
afterEach(() => {
  cleanup()
  jest.restoreAllMocks()
})

test('Click `add-count` will call dispatch in useCallback', () => {
  expect(mockDispatch.mock.calls[0]).toBeUndefined()

  wrapper.getAllByTestId('add-count').forEach(el => fireEvent.click(el))

  expect(mockDispatch).toBeCalled()
  expect(mockDispatch.mock.calls[0][0]).toEqual({ type: ADD_COUNT })
  expect(mockDispatch.mock.calls[1][0]).toEqual({ type: GET_SAGA_COUNT })
  expect(mockDispatch.mock.calls[2]).toBeUndefined()
})

test('Set `count` from `store.count` using useSelector', () => {
  expect(wrapper.getAllByTestId('count').map(el => el.textContent)).toEqual([
    '12',
    '34'
  ])
})

test('Match the snapshot', () => {
  expect(wrapper.asFragment()).toMatchSnapshot()
})
