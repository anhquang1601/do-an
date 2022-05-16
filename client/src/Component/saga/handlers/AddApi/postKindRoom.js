import { call,put,takeLatest,takeEvery } from "redux-saga/effects";
import { postKindRoom } from "../../request/postUser";


function* handlersPostKindRoom(payload){
    try {
      const users = yield postKindRoom(payload)
        if(users.status===200){
      yield put({type:"POST_KINDROOM_SUCCESS",payload:payload.payload})
        }
    } catch (error) {
      yield put({ type: "POST_KINDROOM_ERROR", message: error.message });
    }
  }

function* watcherPostKindRoomSaga(){
  yield takeEvery("POST_KINDROOM_RESQUESTED",handlersPostKindRoom);
  }

export default watcherPostKindRoomSaga;
