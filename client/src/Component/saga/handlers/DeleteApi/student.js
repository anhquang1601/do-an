import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { deleteStudent } from "../../request/deleteKindRoom";

function* handlersDelete(payload) {
  try {
    const result = yield deleteStudent(payload);
    console.log("result",result)
    if (result) {
      yield put({ type: "DELETE_STUDENT_SUSSCESS", payload });
    }
  } catch (err) {
    yield put({ type: "ERROR", message: err.message });
  }
}
export function* watcherDeleteStudent() {
  yield takeEvery("DELETE_STUDENT_REQUESTED", handlersDelete);
}
