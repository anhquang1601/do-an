import { call, put, takeEvery} from "redux-saga/effects";
import fetchApi from "../../request/fetchStudent";

function* handlersGetStudent(){
    try {
        const payload = yield call(fetchApi.fetchStudent)
        yield put({type: "GET_STUDENT_SUSSCESS", payload})
    } catch (error) {
        yield put({type: "ERROR", error})
    }
}
 function* watcherGetStudentSaga(){
    yield takeEvery( "GET_STUDENT_REQUESTED", handlersGetStudent)
}
export default watcherGetStudentSaga;