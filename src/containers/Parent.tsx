import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Child from '@/components/Child'
import { ADD_COUNT, GET_SAGA_COUNT } from '@/modules/counter'
import { States } from '@/modules/states'

const Parent: React.FC = () => {
  const dispatch = useDispatch()
  const addCount = useCallback(() => dispatch({ type: ADD_COUNT }), [dispatch])
  const getSagaCount = useCallback(() => dispatch({ type: GET_SAGA_COUNT }), [
    dispatch
  ])
  const counter = useSelector((s: States) => s.counter)

  return (
    <>
      <Child addCount={addCount} count={counter.count} />
      <Child addCount={getSagaCount} count={counter.sagaCount} />
    </>
  )
}

export default Parent
