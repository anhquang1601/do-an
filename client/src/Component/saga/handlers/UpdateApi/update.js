import { updateKindRoom } from "../../request/update";

import { put,takeEvery } from "redux-saga/effects";

function* handlersUpdateKindRoom(payload){
    console.log(payload)
    try {
      const users = yield updateKindRoom(payload)
        if(users.status===200){
      yield put({type:"UPDATE_KIND_SUCCESS",payload:payload.payload})
        }
    } catch (error) {
      yield put({ type: "POST_KINDROOM_ERROR", message: error.message });
    }
  }
  
 function* watcherpdateKindRoomSaga(){
  yield takeEvery("UPDATE_KINDROOM_RESQUESED",handlersUpdateKindRoom);
  }

  export default watcherpdateKindRoomSaga;