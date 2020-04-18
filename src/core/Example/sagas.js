import { put, takeLatest } from 'redux-saga/effects'
import exampleSlice from './slice'

function* fetchExampleAsync({ payload }) {
  try {
    yield put(
      exampleSlice.actions.update({
        data: [
          'Leo 1',
          'Leo 2',
          'Cat',
          'Leo 3',
          'Una 1',
          'Rabbit',
          'Una 2',
          'Una 3',
          'Dog'
        ]
      })
    )
  } catch ({ message }) {
    console.error(message)
  }
}

export default function* exampleSaga() {
  yield takeLatest(exampleSlice.sagas.fetchExampleAsync, fetchExampleAsync)
}
