import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '@/components/globals/Header.tsx'
import Parent from '@/pages/Parent.tsx'
import '@/modules/states.ts'
import store from '@/store.ts'

render(
  <Provider store={store}>
    <>
      <Header />
      <Router>
        <Route path="/" component={Parent} exact />
      </Router>
    </>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
