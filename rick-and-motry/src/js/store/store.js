import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { allReducer } from "../reducers";

const middleware = [thunk];

const store = createStore(
    allReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;