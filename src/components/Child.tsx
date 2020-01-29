import React from 'react'
import { AnyAction } from 'redux'
import styled from 'styled-components'

interface Props {
  addCount: () => AnyAction
  count: number
}

const Child = (p: Props): JSX.Element => (
  <Div>
    <span data-test="count">{p.count}</span>
    <button data-test="add-count" onClick={(): AnyAction => p.addCount()}>
      ADD
    </button>
  </Div>
)

const Div = styled.div`
  color: white;
  background-color: blue;
`

export default Child
