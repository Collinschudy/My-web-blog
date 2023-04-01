import { ContentActionTypes } from "./action.type"

export const setLifestyleContentList = content => ({
    type: ContentActionTypes.SET_LIFESTYLE_CONTENT_LIST,
    payload: content
})

export const setMemoirContentList = content => ({
    type: ContentActionTypes.SET_MEMOIR_CONTENT_LIST,
    payload: content
})

export const setPoetryContentList = content => ({
    type: ContentActionTypes.SET_POETRY_CONTENT_LIST,
    payload: content
})

export const setExcerptContentList = content => ({
    type: ContentActionTypes.SET_EXCERPT_CONTENT_LIST,
    payload: content
})