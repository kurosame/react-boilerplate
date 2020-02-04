import { fork, ForkEffect } from 'redux-saga/effects'
import { getSagaCount } from '@/sagas/counter'

export default function* rootSaga(): IterableIterator<ForkEffect> {
  yield fork(getSagaCount)
}
