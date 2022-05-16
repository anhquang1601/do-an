import { call,put,takeEvery, } from "redux-saga/effects";
import fetchApi from "../../request/fetchStudent";

function* handlersGetKindRoom(){
    try {
        const kindroom=yield call(fetchApi.fetchKindRoom)
        yield put({type:"GET_KINDROOM_SUCCESS",kindroom})
    } catch (error) {
        yield put({type:"KINDROOM_ERROR",error})
    }
}
 function* watcherKindRoomSaga(){
    yield takeEvery("GET_KINDROOM_RESQUESTED",handlersGetKindRoom)
 }

 export default watcherKindRoomSaga;
