import { all } from "redux-saga/effects";
import watcherUserSaga from "./handlers/fetchStudent";
import watcherUser from "./handlers/postUser";
import watcherGetUser from "./handlers/getUser";
import { fork } from "redux-saga/effects";
import watcherKindRoomSaga from "./handlers/FetchApi/getKindRoom";
import watcherPostKindRoomSaga from "./handlers/AddApi/postKindRoom";
import { watcherDeleteKindRoom } from "./handlers/DeleteApi/deleteKindRoom";
import watcherpdateKindRoomSaga from "./handlers/UpdateApi/update";
import watcherPostStudentSaga from "./handlers/AddApi/postStudent";
import watcherGetStudentSaga from "./handlers/FetchApi/getStudent";
import { watcherDeleteStudent }  from "./handlers/DeleteApi/student";
import watcherUpdateRentRoomSaga from "./handlers/UpdateApi/updateRentRoom";
import watcherGetStudentSuccessSaga from "./handlers/FetchApi/getStudentSuccess"
import watcherGetRoomSaga from "./handlers/FetchApi/getRoom";
import watcherBillSaga from "./handlers/FetchApi/getBillRoom";
import watcherUpdateBillRoomSaga from "./handlers/UpdateApi/updateBillRoom";
import watcherUpdatePayRoomSaga from "./handlers/UpdateApi/updatePayRoom";
import watcherGetPayRoomSaga from "./handlers/FetchApi/getPayRoom";
import watcherPostRoomSaga from "./handlers/AddApi/postRoom";
import watcherGetRoomAllSaga from "./handlers/FetchApi/getRoomAll";
import watcherHopDongSaga from "./handlers/FetchApi/getHopDong";
import watcherUpdateRoomSaga from "./handlers/UpdateApi/updateRoom";
export default function* rootSaga() {
  yield all([
    fork(watcherUserSaga),
    fork(watcherUser),
    fork(watcherGetUser),
    fork(watcherKindRoomSaga),
    fork(watcherPostKindRoomSaga),
    fork(watcherDeleteKindRoom),
    fork(watcherpdateKindRoomSaga),
    fork(watcherPostStudentSaga),
    fork(watcherGetStudentSaga),
    fork(watcherDeleteStudent),
    fork(watcherUpdateRentRoomSaga),
    fork(watcherGetStudentSuccessSaga),
    fork(watcherGetRoomSaga),
    fork(watcherBillSaga),
    fork(watcherUpdateBillRoomSaga),
    fork(watcherUpdatePayRoomSaga),
    fork(watcherGetPayRoomSaga),
    fork(watcherPostRoomSaga),
    fork(watcherGetRoomAllSaga),
    fork(watcherHopDongSaga),
    fork(watcherUpdateRoomSaga)
  ]);
}
