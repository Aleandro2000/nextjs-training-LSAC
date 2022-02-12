import { likeAction } from "../actions/index.js";
import { initialStates } from "../states";

export const likeReducer = (state = initialStates.like, action) => {
    switch (action.type) {
    case "LIKE":
        return likeAction(state);
    default:
        return state;
    }
};