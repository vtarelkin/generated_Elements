import {appConstants} from '../constants/appConstants';
import allReducers from './index';

// this one is useful when we want to reset all the data, for ex. for user when he logs out
const rootReducer = (state, action) => {
    if (action.type === appConstants.CLEAR_ALL_REDUCERS_DATA) {
        return allReducers(undefined, action)
    } else {
        return allReducers(state, action)
    }
};

export default rootReducer;
