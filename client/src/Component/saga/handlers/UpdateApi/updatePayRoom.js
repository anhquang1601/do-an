import { updatePayRoom } from "../../request/update";
import { put, takeEvery } from "redux-saga/effects";
function* handlerUpdatePayRoom(payload) {
  console.log(payload, "saga");
  try {
    const rentRoom = yield updatePayRoom(payload);
    if (rentRoom.status === 200) {
      yield put({ type: "UPDATE_PAYROOM_SUCCESS", payload: payload.payload });
    }
  } catch (error) {
    yield put({ type: "UPDATE_PAYROOM_ERROR", message: error.message });
  }
}

function* watcherUpdatePayRoomSaga() {
  yield takeEvery("UPDATE_PAYROOM_RESQUESED", handlerUpdatePayRoom);
}

export default watcherUpdatePayRoomSaga;
