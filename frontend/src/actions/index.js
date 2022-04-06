export const saveItemsToListData = (listItems) => {
    return {
        type: appConstants.SAVE_ITEMS_LIST_DATA,
        listItems
    };
};

export const updateItemsToListData = (listItems) => {
    return {
        type: appConstants.UPDATE_ITEMS_LIST_DATA,
        listItems
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
        saveDate
    };
};
