import {appConstants} from '../constants/appConstants';

const itemListReducer = (state = {
    listItems: [],
    savedDate: new Date(('1970-12-17T03:24:00'))
}, action) => {
    switch (action.type) {
        case appConstants.SAVE_ITEMS_LIST_DATA:
            return {
                ...state,
                listItems: action.listItems
            };
        case appConstants.UPDATE_ITEMS_LIST_DATA:
            return {
                ...state,
                listItems: action.listItems
            };
        case appConstants.CLEAR_ITEMS_LIST_DATA:
            return {
                ...state,
                listItems: action.listItems
            };
        case appConstants.SAVE_CURRENT_TIME:
            return {
                ...state,
                savedDate: action.savedDate
            };
        default:
            return state
    }
};

export default itemListReducer;
