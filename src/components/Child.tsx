import React from 'react'
import { AnyAction } from 'redux'
import styled from 'styled-components'

interface Props {
  addCount: () => AnyAction
  count: number
}

const Child: React.FC<Props> = p => (
  <Div>
    <span data-testid="count">{p.count}</span>
    <button data-testid="add-count" onClick={(): AnyAction => p.addCount()}>
      ADD
    </button>
  </Div>
)

const Div = styled.div`
  color: white;
  background-color: blue;
`

export default Child
