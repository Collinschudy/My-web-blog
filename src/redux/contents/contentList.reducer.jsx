import { ContentActionTypes } from "./action.type";

const INITIAL_STATE = {
    lifestyleContentList: [],
    poetryContentList: [],
    memoirContentList: [],
    excerptContentList: []

}


const contentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ContentActionTypes.SET_LIFESTYLE_CONTENT_LIST:
            return {
                ...state,
                lifestyleContentList: action.payload
            }

        case ContentActionTypes.SET_POETRY_CONTENT_LIST:
            return {
                ...state,
                poetryContentList: action.payload
            }

        case ContentActionTypes.SET_MEMOIR_CONTENT_LIST:
            return {
                ...state,
                memoirContentList: action.payload
            }

        case ContentActionTypes.SET_EXCERPT_CONTENT_LIST:
            return {
                ...state,
                excerptContentList: action.payload
            }

        default:
            return state;
    }
}

export default contentReducer;