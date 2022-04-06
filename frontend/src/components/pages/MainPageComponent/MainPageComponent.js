import React from 'react';

import MainPageHeader from './MainPageHeader';
import MainPageList from './MainPageList';
import MainPageFooter from './MainPageFooter';

import './MainPageComponent.css';

const MainPageComponent = () => {

    return (
        <div className="main-page-component-wrapper">
            <MainPageHeader/>
            <MainPageList/>
            <MainPageFooter/>
        </div>
    )
};

export default MainPageComponent;
