import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getUser } from "../request/postUser";

function* handleGetUser() {
  try {
    const users = yield call(getUser);
   
    yield put({ type: "GET_SUCCESS",  users });
  } catch (err) {
    yield put({ type: "ERROR", message: err.message });
  }
}

 function* watcherGetUser() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetUser);
}
export default watcherGetUser;
