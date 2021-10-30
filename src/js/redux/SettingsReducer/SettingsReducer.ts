import { SET_MAIN_MENU } from '../PopapReducer/types';
import { IReducerAction } from '../rootReducer';
import { IMenuItem } from './actions';

export interface IStateSettings {
    mainMenu: Array<IMenuItem>
}

const initialState:IStateSettings = {
    mainMenu: [],
}

export type TSettingsReducer = (state:IStateSettings, action: IReducerAction<any>) => IStateSettings
export const SettingsReducer:TSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_MENU:
            return { ...state, mainMenu: action.payload }
        default:
            return state;
    }
}