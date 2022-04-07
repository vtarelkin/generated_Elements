import moment from 'moment';

import {appConstants} from '../constants/appConstants';
import ChooseAndChangeRandom from '../helpers';

//action to save items to list data
export const saveItemsToListData = (listItems) => {
    return {
        type: appConstants.SAVE_ITEMS_LIST_DATA,
        listItems
    };
};

//action to make some changes on data (get 8000 random elements and change their values to random)
export const updateItemsToListData = (listData) => {
    const changedListData = ChooseAndChangeRandom(listData);
    const currentTime = moment().format("DD MMM YYYY h:mm:ss A");
    return {
        type: appConstants.UPDATE_ITEMS_LIST_DATA,
        listItems: changedListData,
        savedDate: currentTime
    };
};

export const clearItemsInListData = (listItems) => {
    return {
        type: appConstants.CLEAR_ITEMS_LIST_DATA,
        listItems
    };
};

export const saveCurrentTime = (savedDate) => {
    return {
        type: appConstants.SAVE_CURRENT_TIME,
        savedDate
    };
};

export const clearAllStoreData = () => {
    return {
        type: appConstants.CLEAR_ALL_REDUCERS_DATA
    }
};
