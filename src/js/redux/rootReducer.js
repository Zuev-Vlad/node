import {
    combineReducers
} from "redux";
import {
    PopapReducer
} from "./PopapReducer/PopapReducer";
import {
    SettingsReducer
} from './SettingsReducer/SettingsReducer';



export const rootReducer = combineReducers({
    popap: PopapReducer,
    menu: SettingsReducer,
})