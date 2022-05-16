
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { PostUser } from "../request/postUser";






function* handlePostUser(action){
   
    try {
  
      const users = yield PostUser(action.values)
     /*  yield put({type:"ISLOADING_SIGIN"}) */
       
        if(users===true){
      yield put({type:"POST_SUCCESS",action})
        }
    } catch (error) {
      yield put({ type: "POST_ERROR", message: error.message });
    }
  }
  
 function* watcherUser(){
  yield takeEvery("POSTUSER_SUCCESS_REQUESTS",handlePostUser);
  }

  export default watcherUser;