import { updateBillRoom } from "../../request/update";
import {put, takeEvery} from "redux-saga/effects";
function* handlerUpdateBillRoom(payload){
    try{
        const billroom = yield updateBillRoom(payload)
        console.log("billroom",billroom)
        if(billroom.status === 200){
            yield put({type: "UPDATE_BILLROOM_SUCCESS", payload: payload.payload})
        }
    }
    catch(error){
        yield put({ type: "UPDATE_BILLROOM_ERROR", message: error.message });
    }
}

function* watcherUpdateBillRoomSaga(){
    yield takeEvery("UPDATE_BILLROOM_RESQUESED",handlerUpdateBillRoom)
}

export default watcherUpdateBillRoomSaga;