import { call, put, takeEvery } from "redux-saga/effects";
import { postRoom } from "../../request/postUser";

function* handlersRoom(data){
    console.log("00",data)
    try {
        const payload = yield postRoom(data)
        console.log("payload",payload)
        yield put({type: "GET_ROOM_SUSSCESS", payload})
    } catch (error) {
        yield put({type: "ERROR", error})
    }
}
 function* watcherGetRoomSaga(){
    yield takeEvery( "GET_ROOM_REQUESTED", handlersRoom)
}
export default watcherGetRoomSaga;