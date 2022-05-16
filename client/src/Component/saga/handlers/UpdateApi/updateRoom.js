import { updateRoom } from "../../request/update";
import { put, takeEvery } from "redux-saga/effects";
function* handlerUpdatePayRoom(payload) {
  console.log(payload, "saga");
  try {
    const Room = yield updateRoom(payload);
    if (Room.status === 200) {
      yield put({ type: "UPDATE_ROOM_SUCCESS", payload: payload.payload });
    }
  } catch (error) {
    yield put({ type: "UPDATE_ROOM_ERROR", message: error.message });
  }
}

function* watcherUpdateRoomSaga() {
  yield takeEvery("UPDATE_ROOM_RESQUESED", handlerUpdatePayRoom);
}

export default watcherUpdateRoomSaga;