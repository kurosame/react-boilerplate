import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Child from '@/components/Child'

storiesOf('Child', module).add('default', () => (
  /* eslint-disable @typescript-eslint/no-explicit-any */
  <Child addCount={(): any => action('add-count clicked')()} count={11} />
  /* eslint-enable @typescript-eslint/no-explicit-any */
))
