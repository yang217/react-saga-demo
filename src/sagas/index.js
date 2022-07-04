import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as Api from "../service/api";

function* fetchUser(action) {
  try {
    const users = yield call(Api.fetchUser);
    yield put({
      type: "USER_FETCH_SUCCEEDED",
      payload: {
        users: users
      }
    });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* rootSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default rootSaga;
