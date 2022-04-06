import React from 'react';

import MainPageListItem from './MainPageListItem';

import './MainPageList.css';

const MainPageList = () => {

    const listOfItems = [{id: 0, value: 0}, {id: 1, value: 1}, {id: 2, value: 2}];

    return (
        <ul className="main-page-list">
            {listOfItems.map(singleItem => (
                <MainPageListItem
                    key={singleItem.id}
                    className="main-page-list-item"/>
            ))}
        </ul>
    )
};

export default MainPageList;
