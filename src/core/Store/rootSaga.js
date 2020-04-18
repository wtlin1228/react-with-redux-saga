import { all } from 'redux-saga/effects'

import { exampleSaga } from 'core/Example'

export default function* rootSaga() {
  yield all([exampleSaga()])
}
