import { SET_MAIN_MENU } from '../PopapReducer/types';


const initialState = {
    mainMenu: [],
}


export const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_MENU:
            return {...state, mainMenu: action.payload }
        default:
            return state;
    }
}