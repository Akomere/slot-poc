import { combineReducers } from "redux";
import courses from "./courseReducer";
import timeSlots from "./timeSlotReducer";

 const defaultState = {}
const rootReducer = combineReducers({
  courses,
  timeSlots
});

export default rootReducer;
