import {
    SET_IS_OPEN_POPAP,
    SET_CONTENT_POPAP,
    SET_TITLE_POPAP,
    SET_ON_SAVE_POPAP,
    SET_ON_CLOSE_POPAP,
    SET_SIZE_POPAP
} from "./actions";

const initialState = {
    isOpen: true,
    title: 'Заголовок',
    content: 'Контент',
    onSave: () => alert('save'),
    onClose: () => alert('close'),
    size: 'md'
}

export const PopapReducer = (state = initialState, action) => {
    switch (action) {
        case SET_IS_OPEN_POPAP:
            return {...state, isOpen: action.payload }
        case SET_TITLE_POPAP:
            return {...state, title: action.payload }
        case SET_CONTENT_POPAP:
            return {...state, content: action.payload }
        default:
            return state;
    }
}