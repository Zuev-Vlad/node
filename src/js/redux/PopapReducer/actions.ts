import { IReducerAction } from "../rootReducer";
import {
    SET_IS_OPEN_POPAP,
    SET_TITLE_POPAP,
    SET_CONTENT_POPAP,
    SET_ON_CLOSE_POPAP,
    SET_ON_SAVE_POPAP,
    SET_IS_SHOW_FOOTER_POPAP
} from "./types";

// Клик по кнопке закрыть
export type TSetOnClosePopap = (onClose: () => void) => IReducerAction<() => void>
export const setOnClosePopap: TSetOnClosePopap = (onClose = () => false) => {
    return {
        type: SET_ON_CLOSE_POPAP,
        payload: onClose
    }
}
// Показать/скрыть кнопки модального окна
export type TSetIsShowFooterPopap = (flag: boolean) => IReducerAction<boolean>
export const setIsShowFooterPopap: TSetIsShowFooterPopap = (flag: boolean = true) => {
    return {
        type: SET_IS_SHOW_FOOTER_POPAP,
        payload: flag
    }
}

// Клик по кнопке закрыть
export type TSetOnSavePopap = (onSave: () => void) => IReducerAction<() => void>
export const setOnSavePopap: TSetOnSavePopap = (onSave = () => false) => {
    return {
        type: SET_ON_SAVE_POPAP,
        payload: onSave
    }
}

// флаг открытия окна
export type TSetIsOpenPopap = (isOpen: boolean) => IReducerAction<boolean>
export const setIsOpenPopap: TSetIsOpenPopap = (isOpen = false) => {
    console.log({ SET_IS_OPEN_POPAP, isOpen })
    return {
        type: SET_IS_OPEN_POPAP,
        payload: isOpen
    }
}
// Установить заголовок окна
export type TSetTitlePopap = (title: string) => IReducerAction<string>
export const setTitlePopap: TSetTitlePopap = (title = '') => {
    return {
        type: SET_TITLE_POPAP,
        payload: title
    }
}

// Установить контент окна
export type TSetContentPopap = (content: JSX.Element | string) => IReducerAction<JSX.Element | string>
export const setContentPopap: TSetContentPopap = (content: JSX.Element | string = '') => {
    return {
        type: SET_CONTENT_POPAP,
        payload: content
    }
}