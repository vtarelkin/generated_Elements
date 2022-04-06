import React from 'react';

import MainPageListItem from './MainPageListItem';

import './MainPageList.css';

const MainPageList = () => {

    const date = Date.now();

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
                        <MainPageListItem
                            key={singleItem.id}
                            id={singleItem.id}
                            value={singleItem.value}
                            className="main-page-list-item"/>
                    ))}
                </ul>
            </div>
            <div className="main-page-list-button-container">
                <button>Обновить</button>
                <span>Дата последнего обновления: ${date}</span>
            </div>

        </div>
    )
};

export default MainPageList;
