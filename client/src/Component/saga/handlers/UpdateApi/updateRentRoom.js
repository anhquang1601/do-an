import { updateRentRoom } from "../../request/update";
import {put, takeEvery} from "redux-saga/effects";
function* handlerUpdateRentRoom(payload){
    try{
        const rentRoom = yield updateRentRoom(payload)
        console.log(rentRoom,"saga")
        if(rentRoom.status === 200){
            yield put({type: "UPDATE_RENTROOM_SUCCESS", payload: payload.payload})
        }
    }
    catch(error){
        console.log(error,"saga")
        yield put({ type: "UPDATE_RENTROOM_ERROR", message: error.message });
    }
}

function* watcherUpdateRentRoomSaga(){
    yield takeEvery("UPDATE_RENTROOM_RESQUESED",handlerUpdateRentRoom)
}

export default watcherUpdateRentRoomSaga;