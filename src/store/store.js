import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import reducer from "./reducer";
import reducer2 from "./reducer2";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ reducer, reducer2 });

const store = initialState => {
  const middleware = [thunk];
  middleware.push(createLogger({ collapsed: true }));
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), f => f)
  );
};

export default store;
