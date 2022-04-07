import {appConstants} from '../constants/appConstants';

const itemListReducer = (state = {
    listItems: [],
    savedDate: {}
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
                listItems: action.listItems,
                savedDate: action.savedDate
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
