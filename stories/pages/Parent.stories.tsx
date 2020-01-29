import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import Parent from '@/containers/Parent.tsx'
import store from '@/store'

storiesOf('Parent', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <Parent />)
