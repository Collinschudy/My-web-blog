import { createSelector } from 'reselect';

const selectContent = state => state.content;

export const selectLifestyleContentList = createSelector(
    [selectContent],
    content => content.lifestyleContentList
)

export const selectPoetryContentList = createSelector(
    [selectContent],
    content => content.poetryContentList
)

export const selectMemoirContentList = createSelector(
    [selectContent],
    content => content.memoirContentList
)

export const selectExcerptContentList = createSelector(
    [selectContent],
    content => content.excerptContentList
)