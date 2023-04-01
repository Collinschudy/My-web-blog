import { combineReducers } from 'redux';
import contentReducer from './contents/contentList.reducer';

export default combineReducers({
    content: contentReducer
})