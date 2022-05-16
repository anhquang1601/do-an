import { call, put, takeEvery } from "redux-saga/effects";
import fetchApi from "../../request/fetchStudent";

function* handlersGetBillRoom() {
  try {
    const billroom = yield call(fetchApi.getBillRoom);
    console.log("billroom",billroom)
    yield put({ type: "GET_BILLROOM_SUCCESS", billroom });
  } catch (error) {
      console.log("p",error)
    yield put({ type: "BILLROOM_ERROR", error });
  }
}
function* watcherBillSaga() {
    
  yield takeEvery("GET_BILLROOM_SUCCESS_REQUESTED",handlersGetBillRoom);
}

export default watcherBillSaga;
