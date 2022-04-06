import React from 'react';

import {appConstants} from '../../../../constants/appConstants';

import './MainPageHeader.css';

const MainPageHeader = () => {

    const urlToRedirect = appConstants.HEADER_BUTTON_URL_TO_REDIRECT;

    const handleHeaderButtonClick = () => {
        window.location = urlToRedirect;
    };

    return (
        <header className="main-page-header">
            <div className="main-page-header-wrapper">
                <h1>{appConstants.HEADER_TEXT}</h1>
                <button onClick={handleHeaderButtonClick}>{appConstants.HEADER_BUTTON_TEXT}</button>
            </div>
        </header>
    )
};

export default MainPageHeader;
