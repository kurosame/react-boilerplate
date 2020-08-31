import { call, put, take } from 'redux-saga/effects'
import { ADD_SAGA_COUNT, GET_SAGA_COUNT } from '@/modules/counter'
import { getApiSagaCount, getSagaCount } from '@/sagas/counter'
// ESLint error only when VSCode
/* eslint-disable-next-line import/no-unresolved */
import mockAxios from '@test/setup'

let spyErr: jest.SpyInstance
beforeEach(() => {
  spyErr = jest.spyOn(console, 'error')
  spyErr.mockImplementation(x => x)
})
afterEach(jest.restoreAllMocks)

describe('Run `getApiSagaCount`', () => {
  test('Return `sagaCount` when resolved', async () => {
    mockAxios.get.mockResolvedValue({ data: { sagaCount: 2 } })

    expect(await getApiSagaCount()).toEqual(2)
    expect(spyErr).not.toBeCalled()
  })

  test('Output console.error when rejected', async () => {
    mockAxios.get.mockRejectedValue({ message: 'rejected case' })

    expect(await getApiSagaCount()).toEqual(0)
    expect(spyErr).toBeCalled()
    expect(spyErr.mock.calls[0][0]).toEqual(
      'GET_SAGA_COUNT API response error: rejected case'
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
