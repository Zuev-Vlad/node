import {
    SET_IS_OPEN_POPAP,
    SET_TITLE_POPAP,
    SET_CONTENT_POPAP,
    SET_ON_CLOSE_POPAP
} from "./types";

export const setOnClosePopap = (onClose = () => false) => {
    return {
        type: SET_ON_CLOSE_POPAP,
        payload: onClose
    }
}

export const setIsOpenPopap = (isOpen = false) => {
    console.log({ SET_IS_OPEN_POPAP, isOpen })
    return {
        type: SET_IS_OPEN_POPAP,
        payload: isOpen
    }
}

export const setTitlePopap = (title = '') => {
    return {
        type: SET_TITLE_POPAP,
        payload: title
    }
}


export const setContentPopap = (content = '') => {
    return {
        type: SET_CONTENT_POPAP,
        payload: content
    }
}