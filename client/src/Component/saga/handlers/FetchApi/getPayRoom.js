import { call, put, takeEvery} from "redux-saga/effects";
import fetchApi from "../../request/fetchStudent";

function* handlersGetPayRoom(){
    try {
        const payload = yield call(fetchApi.fetchPayRoom)
        yield put({type: "GET_LIST_PAY_SUSSCESS", payload})
    } catch (error) {
        yield put({type: "ERROR", error})
    }
}
 function* watcherGetPayRoomSaga(){
    yield takeEvery( "GET_PAY_ROOM_REQUESTED", handlersGetPayRoom)
}
export default watcherGetPayRoomSaga;