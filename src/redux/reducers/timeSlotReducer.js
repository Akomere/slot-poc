import TimeSlots from "../../components/common/TimeSlots";
import * as types from "../actions/actionTypes";
const defaultState = {
    avalableTimeSlots: [
        {
          _id: "1",
          time: "2023-09-20T14:00:00Z",
          user: "John Doe",
          email: "john.doe@example.com"
        },
        {
          _id: "2",
          time: "2023-09-20T14:30:00Z",
          user: "Jane Smith",
          email: "jane.smith@example.com"
        },
        {
          _id: "3",
          time: "2023-09-21T10:00:00Z",
          user: "Alice",
          email: "alice@example.com"
        },
        {
          _id: "4",
          time: "2023-09-21T10:30:00Z",
          user: "Bob",
          email: "bob@example.com"
        }
      ],
    bookedSlot: " "
};


export default function timeSlotReducer(state = {}, action) {
  switch (action.type) {
    case "SELECTED_TIME":
      return {...state,
               bookedSlot: action.payload
              };
    default:
      return state;
  }
}