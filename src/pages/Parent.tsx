import React from 'react'
import styled from 'styled-components'
import Child from '@/components/Child.tsx'

const Parent = (): JSX.Element => (
  <Div>
    Parent
    <Child />
  </Div>
)

const Div = styled.div`
  color: white;
  background-color: green;
`

export default Parent
