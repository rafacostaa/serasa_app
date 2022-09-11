import { call, put } from "redux-saga/effects";
import { loadSuccess, loadFailure } from "./actions";

import axios from "../../../service/axios";

export default function* load() {
  try {
    const response = yield call(axios.get, "/");
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
