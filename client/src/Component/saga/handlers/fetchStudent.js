import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import fetchApi from "../request/fetchStudent"

function* handleGetStudent() {
  try {
    const users = yield call(fetchApi.fetchStudent);
  
    yield put({ type: "SUCCESS", users: users });
  } catch (err) {
    yield put({ type: "ERROR", message: err.message });
  }
}

 function* watcherUserSaga() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetStudent);
}
export default watcherUserSaga;
