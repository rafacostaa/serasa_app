import rootReducer from "./ducks/rootReducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import load from "./ducks/cards/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(load);

export default store;
