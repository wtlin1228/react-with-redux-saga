import { all } from 'redux-saga/effects'

import { exampleSaga } from 'Example'

export default function* rootSaga() {
  yield all([exampleSaga()])
}
