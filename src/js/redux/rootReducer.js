import { combineReducers } from "redux";
import { PopapReducer } from "./PopapReducer/PopapReducer";


export const rootReducer = combineReducers({
    popap: PopapReducer
})