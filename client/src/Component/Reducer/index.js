import studentReducer from "./student";
import { combineReducers } from "redux";
import kindRoomReducer from "./KindRoom";
import sigupReducer from "./Sigup";
import getRoomReducer from "./room";
import billRoomReducer from "./billRoom";
import hopdongReducer from "./hopdong";
const AllReducer = combineReducers({
  studentReducer,
  sigupReducer,
  kindRoomReducer,
  getRoomReducer,
  billRoomReducer,
  hopdongReducer
});
export default AllReducer;
