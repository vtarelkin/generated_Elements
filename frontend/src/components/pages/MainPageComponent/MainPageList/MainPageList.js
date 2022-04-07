import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {List} from 'react-virtualized';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

import {appConstants} from '../../../../constants/appConstants';
import MainPageListItem from './MainPageListItem';
import {updateItemsToListData} from '../../../../actions';

import './MainPageList.css';

const MainPageList = () => {

    const dispatch = useDispatch();

    const {listItems} = useSelector(store => store.itemsListReducer, isEqual);
    const {savedDate} = useSelector(store => store.itemsListReducer, isEqual);

    //function for dispatching an action that will change value to random from 8 000 randomly selected elements
    const handleRefreshButtonClick = () => {
        dispatch(updateItemsToListData(listItems));
    };

    //rendered function for virtual list
    const rowRenderer = useCallback(({index, key, style}) => (
        <MainPageListItem
            index={index}
            key={key}
            style={style}
            className="main-page-list-item"/>
    ), []);

    return (
        <>
            {!isEmpty(listItems) &&
            <div className="main-page-list-wrapper">
                <div className="main-page-list-span-and-list">
                    <label className="main-page-list-span">A main page list</label>
                    <List className="main-page-list"
                          height={700}
                          width={300}
                          rowCount={listItems.length}
                          rowRenderer={rowRenderer}
                          rowHeight={22}>
                    </List>
                </div>
                <div className="main-page-list-button-container">
                    <button onClick={handleRefreshButtonClick}>{appConstants.REFRESH_BUTTON_CAPTION}</button>
                    <span>{appConstants.TEXT_UNDER_BUTTON} {savedDate}</span>
                </div>
            </div>
            }
        </>
    )
};

export default MainPageList;
