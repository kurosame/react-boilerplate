import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Child from '@/components/Child.tsx'
import { ADD_COUNT, GET_SAGA_COUNT } from '@/modules/counter.ts'
import { States } from '@/modules/states.ts'

const Parent = (): JSX.Element => {
  const dispatch = useDispatch()
  const addCount = useCallback(() => dispatch({ type: ADD_COUNT }), [])
  const getSagaCount = useCallback(() => dispatch({ type: GET_SAGA_COUNT }), [])
  const counter = useSelector((s: States) => s.counter)

  return (
    <>
      <Child addCount={addCount} count={counter.count} />
      <Child addCount={getSagaCount} count={counter.sagaCount} />
    </>
  )
}

export default Parent
