import {
    combineReducers
} from "redux";
import {
    PopapReducer
} from "./PopapReducer/PopapReducer";
import {
    SettingsReducer
} from './SettingsReducer/SettingsReducer';

export interface IRootReducerState {
    popap: any
    settings: any
}

export interface IReducerAction<T> {
    type: string
    payload?: T | string
}

export const rootReducer = combineReducers({
    popap: PopapReducer,
    settings: SettingsReducer,
})