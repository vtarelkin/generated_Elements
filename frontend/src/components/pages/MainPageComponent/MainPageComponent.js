import React, {useEffect} from 'react';
import isEmpty from 'lodash/isEmpty';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import random from 'lodash/random';

import MainPageHeader from './MainPageHeader';
import MainPageList from './MainPageList';
import MainPageFooter from './MainPageFooter';
import {clearAllStoreData, saveCurrentTime, saveItemsToListData} from '../../../actions';

import './MainPageComponent.css';

const MainPageComponent = () => {

    const dispatch = useDispatch();

    //preparing the data
    const listOfItems = new Array(10000).fill().map((obj, index) => ({
        id: 1000 + index, //whole number between 1000 and 11000 including
        value: random(200, 1500) //random whole number between 200 and 1500 including
    }));

    useEffect(() => {
        return (() => {
            dispatch(clearAllStoreData()); // resetting the state to default after umounting
        })
    }, []);

    // put prepared data into the reducer. We also could put all the initial logic into the reducer or left as is
    // for the purpose of visibility
    useEffect(() => {
        if (!isEmpty(listOfItems)) {
            dispatch(saveItemsToListData(listOfItems));
            dispatch(saveCurrentTime(moment().format("DD MMM YYYY h:mm:ss A")));
        }
    }, [listOfItems]);

    return (
        <div className="main-page-component-wrapper">
            <MainPageHeader/>
            <MainPageList/>
            <MainPageFooter/>
        </div>
    )
};

export default MainPageComponent;
