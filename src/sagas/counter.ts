import axios from 'axios'
import { Action } from 'redux-actions'
import {
  call,
  put,
  take,
  TakeEffect,
  CallEffect,
  PutEffect
} from 'redux-saga/effects'
import {
  addSagaCount,
  GET_SAGA_COUNT,
  CounterState
} from '@/modules/counter.ts'

export function getApiSagaCount(): Promise<number> {
  return axios
    .get('/api')
    .then(res => res.data.sagaCount)
    .catch(() => {
      console.error('GET_SAGA_COUNT API response error')
      return 0
    })
}

export function* getSagaCount(): IterableIterator<
  TakeEffect | CallEffect | PutEffect<Action<CounterState>>
> {
  while (true) {
    yield take(GET_SAGA_COUNT)
    yield put(addSagaCount({ sagaCount: yield call(getApiSagaCount) }))
  }
}
