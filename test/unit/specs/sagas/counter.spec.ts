import { ADD_SAGA_COUNT, GET_SAGA_COUNT } from '@/modules/counter'
import { getApiSagaCount, getSagaCount } from '@/sagas/counter'
import moxios from 'moxios'
import { call, put, take } from 'redux-saga/effects'

let spyErr: jest.SpyInstance
beforeEach(() => {
  moxios.install()
  spyErr = jest.spyOn(console, 'error')
  spyErr.mockImplementation(x => x)
})
afterEach(() => {
  moxios.uninstall()
  jest.restoreAllMocks()
})

describe('Run `getApiSagaCount`', () => {
  test('Return `sagaCount` when resolved', async () => {
    moxios.stubRequest('/api', {
      status: 200,
      response: { sagaCount: 2 }
    })

    expect(await getApiSagaCount()).toEqual(2)
    expect(spyErr).not.toBeCalled()
  })

  test('Output console.error when rejected', async () => {
    moxios.stubRequest('/api', { status: 400 })

    expect(await getApiSagaCount()).toEqual(0)
    expect(spyErr).toBeCalled()
    expect(spyErr.mock.calls[0][0]).toEqual(
      'GET_SAGA_COUNT API response error: Request failed with status code 400'
    )
  })
})

describe('Run `getSagaCount`', () => {
  test('Call `put`', () => {
    const saga = getSagaCount()

    let res = saga.next()
    expect(res.value).toEqual(take(GET_SAGA_COUNT))

    res = saga.next()
    expect(res.value).toEqual(call(getApiSagaCount))

    res = saga.next()
    const addSagaCountMock: jest.Mock = jest.fn().mockReturnValue({
      type: ADD_SAGA_COUNT,
      payload: { sagaCount: undefined }
    })
    expect(res.value).toEqual(put(addSagaCountMock()))

    res = saga.next()
    expect(res.value).toEqual(take(GET_SAGA_COUNT))
  })
})
