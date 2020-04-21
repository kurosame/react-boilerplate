import React from 'react'
import { AnyAction } from 'redux'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Child from '@/components/Child'

storiesOf('Child', module).add('default', () => (
  <Child
    addCount={(): AnyAction =>
      // Convert HandlerFunction to AnyAction
      (action('add-count clicked')() as unknown) as AnyAction
    }
    count={11}
  />
))
