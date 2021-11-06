import { IReducerAction } from "../rootReducer";
import { TSetIsOpenPopap } from "./actions";
import {
    SET_IS_OPEN_POPAP,
    SET_CONTENT_POPAP,
    SET_TITLE_POPAP,
    SET_ON_SAVE_POPAP,
    SET_ON_CLOSE_POPAP,
    SET_IS_SHOW_FOOTER_POPAP,
    SET_SIZE_POPAP,
} from "./types";

export interface IPopapProps {
    isOpen?: boolean
    title?: string | JSX.Element
    content?: string | JSX.Element
    isShowFooter?: boolean
    onSave?: () => void
    onClose?: () => void
    setIsOpenPopap?: TSetIsOpenPopap,
    saveBtnText?: any
    closeBtnText?: any
    setTitlePopap?: string | JSX.Element
}

export const initialStatePopap:IPopapProps = {
    isOpen: false,
    title: '',
    content: '',
    isShowFooter: true,
    onSave: () => false,
    onClose: () => false,
    // setIsOpenPopap: () => {false},
    saveBtnText: 'Сохранить',
    closeBtnText: 'Закрыть',
}

export const PopapReducer = (state = initialStatePopap, action:IReducerAction<any>) => {
    console.log('reducer', action.type)
    switch (action.type) {
        case SET_IS_OPEN_POPAP:
            return { ...state, isOpen: action.payload }
        case SET_TITLE_POPAP:
            return { ...state, title: action.payload }
        case SET_CONTENT_POPAP:
            return { ...state, content: action.payload }
        default:
            return state;
    }
}