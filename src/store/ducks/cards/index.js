import {
  INCREMENT_DEBT,
  INCREMENT_CREDIT,
  INCREMENT_PROMO,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
} from "./actionTypes";
import { userRandom } from "../../../service/users";

const scoreRandom = 5;
const userRandomState = userRandom();

const INITIAL_STATE = {
  user: userRandomState,
  debts: [],
  credit: [],
  promotions: [],
  score: scoreRandom,
  loading: false,
  error: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_REQUEST:
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        score: state.score,
        debts: action.payload.debts,
        credit: action.payload.credit,
        promotions: action.payload.promotions,
      };
    case LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    case INCREMENT_DEBT:
      const newListDebt = state.debts.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        score: state.score + 15,
        debts: [...newListDebt],
      };

    case INCREMENT_CREDIT:
      const newListCredit = state.credit.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        score: state.score + 10,
        credit: [...newListCredit],
      };

    case INCREMENT_PROMO:
      const newListPromo = state.promotions.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        score: state.score + 2,
        promotions: [...newListPromo],
      };

    default:
      return state;
  }
};

export default reducer;
