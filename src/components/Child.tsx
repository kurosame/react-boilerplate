import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Action } from 'redux-actions'
import styled from 'styled-components'
import {
  addCount,
  getSagaCount,
  CounterActions,
  CounterState
} from '@/modules/counter.ts'
import { States } from '@/modules/states.ts'

interface Props {
  state: { counter: CounterState }
  actions: Pick<CounterActions, 'addCount' | 'getSagaCount'>
  store?: unknown
}

export const Child = (props: Props): JSX.Element => (
  <Div>
    <div>
      <span data-test="count">{props.state.counter.count}</span>
      <button
        data-test="add-count"
        onClick={(): Action<CounterState> => props.actions.addCount()}
      >
        ADD
      </button>
    </div>
    <div>
      <span data-test="saga-count">{props.state.counter.sagaCount}</span>
      <button
        data-test="add-saga-count"
        onClick={(): Action<CounterState> => props.actions.getSagaCount()}
      >
        ADD
      </button>
      ※redux-saga sample
    </div>
  </Div>
)

const Div = styled.div`
  color: white;
  background-color: blue;
`

export default connect(
  (states: States) => ({ state: { counter: states.counter } }),
  (dispatch: Dispatch) => ({
    actions: {
      addCount: bindActionCreators<Action<CounterState>, typeof addCount>(
        addCount,
        dispatch
      ),
      getSagaCount: bindActionCreators<
        Action<CounterState>,
        typeof getSagaCount
      >(getSagaCount, dispatch)
    }
  })
)(React.memo(Child))
