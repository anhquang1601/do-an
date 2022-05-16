import { call, put, takeEvery} from "redux-saga/effects";
import fetchApi from "../../request/fetchStudent";

function* handlersGetStudentSuccess(){
    try {
        const payload = yield call(fetchApi.fetchStudentSuccess)
        yield put({type: "GET_STUDENT_SUCCESS_SUSSCESS", payload})
    } catch (error) {
        yield put({type: "ERROR", error})
    }
}
 function* watcherGetStudentSuccesSaga(){
    yield takeEvery( "GET_STUDENT_SUCCESS_REQUESTED", handlersGetStudentSuccess)
}
export default watcherGetStudentSuccesSaga;