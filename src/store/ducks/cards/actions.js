import {
  INCREMENT_CREDIT,
  INCREMENT_DEBT,
  INCREMENT_PROMO,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
} from "./actionTypes";

export function loadRequest() {
  return {
    type: LOAD_REQUEST,
  };
}
export function loadSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    payload: data,
  };
}
export function loadFailure() {
  return {
    type: LOAD_FAILURE,
  };
}
export function incrementDebtAction(id) {
  return {
    type: INCREMENT_DEBT,
    payload: id,
  };
}
export function incrementCreditAction(id) {
  return {
    type: INCREMENT_CREDIT,
    payload: id,
  };
}
export function incrementPromoAction(id) {
  return {
    type: INCREMENT_PROMO,
    payload: id,
  };
}
