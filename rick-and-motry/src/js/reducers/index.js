import { combineReducers } from "redux";
import { likeReducer } from "./likes";

export const allReducer = combineReducers({
    likeReducer: likeReducer
});