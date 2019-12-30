import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST, SUCCESS, TEST } from '@root/constants/actions';
import { testApi } from '@root/api';

export function* getTestData({ dataId }) {
  try {
    const testData = yield call(testApi, { dataId });

    yield put({ type: `${SUCCESS}_${TEST}`, data: testData });
  } catch (error) {
   console.log(error)
  }
}

export default function testSaga() {
  return [takeLatest(`${REQUEST}_${TEST}`, getTestData)];
}
