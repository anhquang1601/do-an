import { call, put, takeEvery } from "redux-saga/effects";
import fetchApi from "../../request/fetchStudent";

function* handlersRoomAll(){
    try {
        const payload = yield call(fetchApi.getRoom)
        console.log("payload",payload)
        yield put({type: "GET_ROOMALL_SUSSCESS", payload})
    } catch (error) {
        yield put({type: "ERROR", error})
    }
}
 function* watcherGetRoomAllSaga(){
    yield takeEvery( "GET_ROOMALL_REQUESTED", handlersRoomAll)
}
export default watcherGetRoomAllSaga;