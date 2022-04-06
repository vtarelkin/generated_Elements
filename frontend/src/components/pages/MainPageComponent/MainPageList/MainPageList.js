import React from 'react';
import moment from 'moment';

import MainPageListItem from './MainPageListItem';
import {appConstants} from '../../../../constants/appConstants';

import './MainPageList.css';

const MainPageList = () => {

    const formattedDate = moment().format("DD MMM YYYY h:mm A");

    const listOfItems = [
        {id: 0, value: 0},
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
        {id: 4, value: 4},
        {id: 5, value: 5}];

    return (
        <div className="main-page-list-wrapper">
            <div className="main-page-list-span-and-list">
                <label className="main-page-list-span">A main page list</label>
                <ul className="main-page-list">
                    {listOfItems.map(singleItem => (
                        <React.Fragment key={singleItem.id}>
                            <MainPageListItem
                                id={singleItem.id}
                                value={singleItem.value}
                                className="main-page-list-item"/>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            <div className="main-page-list-button-container">
                <button>{appConstants.REFRESH_BUTTON_CAPTION}</button>
                <span>{appConstants.TEXT_UNDER_BUTTON} {formattedDate}</span>
            </div>

        </div>
    )
};

export default MainPageList;
