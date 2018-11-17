import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
);

function configureStore(initialState?: object) {
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
}

export default configureStore();
