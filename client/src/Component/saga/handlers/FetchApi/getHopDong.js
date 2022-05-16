import { call, put, takeEvery } from "redux-saga/effects";
import fetchApi from "../../request/fetchStudent";

function* handlersGetHopDong() {
  try {
    const hopdong = yield call(fetchApi.getHopDong);
    yield put({ type: "GET_HOPDONG_SUCCESS", hopdong });
  } catch (error) {
    yield put({ type: "ERROR", error });
  }
}
function* watcherHopDongSaga() {
    
  yield takeEvery("GET_HOPDONG_SUCCESS_REQUESTED",handlersGetHopDong);
}

export default watcherHopDongSaga;