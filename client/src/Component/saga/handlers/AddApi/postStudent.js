import {put,takeEvery } from "redux-saga/effects";
import { PostStudent } from "../../request/postUser";
function* handlersStudent(payload){
    try{
      const student = yield PostStudent(payload)
      if(student.status===200){
        yield put({type: "POST_STUDENT_SUCCESS", payload: payload.payload})
      }
    }catch(error){
      yield put({type: "ERROR", message: error})
    }
  }
  
function* watcherPostStudentSaga(){
    yield takeEvery("POST_STUDENT_REQUESTED",handlersStudent )
  }
export default watcherPostStudentSaga;