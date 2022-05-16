import { put, takeEvery } from "redux-saga/effects";
import { deleteKindRoom } from "../../request/deleteKindRoom";
function* handllersDelete(payload) {
  try {
    const result = yield deleteKindRoom(payload);
    if (result.status === 200) {
      yield put({ type: "DELETE_KINDROOM_SUCCESS", payload });
    }
  } catch (err) {
    yield put({ type: "DELETE_KINDROOM_ERROR", message: err.message });
  }
}

export function* watcherDeleteKindRoom() {
  yield takeEvery("DELETE_KINDROOM_RESQUESTED", handllersDelete);
}
