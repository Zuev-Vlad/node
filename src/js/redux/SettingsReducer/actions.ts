import { SET_MAIN_MENU } from '../PopapReducer/types';
import { IReducerAction } from '../rootReducer';

export interface IMenuItem {
    id: number
    parrent_id: number
    title: string
    url: string
}

export type TSetMainMenu = (arrayMenu: Array<IMenuItem>) => IReducerAction<Array<IMenuItem>>
export const setMainMenu = (arrayMenu: Array<IMenuItem> = []) => {
    return {
        type: SET_MAIN_MENU,
        payload: arrayMenu
    }
}