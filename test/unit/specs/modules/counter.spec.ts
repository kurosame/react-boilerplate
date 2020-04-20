import {
  ADD_COUNT,
  ADD_SAGA_COUNT,
  counter,
  CounterState
} from '@/modules/counter'

let wrapper: (type: string) => CounterState | undefined
beforeEach(() => {
  wrapper = (type): CounterState =>
    counter(
      { count: 1, sagaCount: 2 },
      { type, payload: { count: 1, sagaCount: 2 } }
    )
})
afterEach(() => {
  wrapper = (): undefined => undefined
})

describe('Run when ActionType is ADD_COUNT', () => {
  test('Set `state.count`', () => {
    expect(wrapper(ADD_COUNT)).toEqual({
      count: 2,
      sagaCount: 2
    })
  })
})

describe('Run when ActionType is ADD_SAGA_COUNT', () => {
  test('Set `state.sagaCount`', () => {
    expect(wrapper(ADD_SAGA_COUNT)).toEqual({
      count: 1,
      sagaCount: 4
    })
  })
})
