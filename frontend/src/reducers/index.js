import {combineReducers} from 'redux';

import itemsListReducer from './itemsListReducer';

const allReducers = combineReducers({
    itemsListReducer
});

export default allReducers;
