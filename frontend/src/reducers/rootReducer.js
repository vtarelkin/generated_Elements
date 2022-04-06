import {appConstants} from '../constants/appConstants';
import allReducers from './index';

const rootReducer = (state, action) => {
    if (action.type === appConstants.CLEAR_ALL_REDUCERS_DATA) {
        return allReducers(undefined, action)
    } else {
        return allReducers(state, action)
    }
};

export default rootReducer;
