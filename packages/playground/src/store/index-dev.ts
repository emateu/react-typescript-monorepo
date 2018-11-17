import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware),
);

function configureStore(initialState?: object) {
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
}

const store = configureStore();

export default store;
