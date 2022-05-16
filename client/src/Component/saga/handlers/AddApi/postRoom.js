import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { postRoomSuccess } from "../../request/postUser";

function* handlersPostRoom(payload) {
  try {
    const users = yield postRoomSuccess(payload);
    if (users.status === 200) {
      yield put({ type: "POST_ROOM_SUCCESS", payload: payload.payload });
    }
  } catch (error) {
    yield put({ type: "POST_ROOM_ERROR", message: error.message });
  }
}

function* watcherPostRoomSaga() {
  yield takeEvery("POST_ROOM_RESQUESTED", handlersPostRoom);
}

export default watcherPostRoomSaga;
