import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import Child from '@/components/Child'
import { CounterState, ADD_COUNT, GET_SAGA_COUNT } from '@/modules/counter'
import { States } from '@/modules/states'

const Parent: React.FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const addCount = useCallback(() => dispatch({ type: ADD_COUNT }), [dispatch])
  const getSagaCount = useCallback(() => dispatch({ type: GET_SAGA_COUNT }), [
    dispatch
  ])
  const counter = useSelector<States, CounterState>(s => s.counter)

  return (
    <>
      <Child addCount={addCount} count={counter.count} />
      <Child addCount={getSagaCount} count={counter.sagaCount} />
    </>
  )
}

export default Parent
