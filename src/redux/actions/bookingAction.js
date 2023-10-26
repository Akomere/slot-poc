import * as types from "./actionTypes";

export function setSelectedBooking(time) {
  return { type: "SELECTED_TIME", payload: time };
}

export function setSelectedService(service) {
  return { type: "SELECTED_SERVICE", payload: service };
}