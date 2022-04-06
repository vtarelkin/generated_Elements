import React from 'react';

import './MainPageHeader.css';

const MainPageHeader = () => {

    const urlToRedirect = 'https://github.com/vtarelkin';

    const handleHeaderButtonClick = () => {
        window.location = urlToRedirect;
    };

    return (
        <header className="main-page-header">
            <div className="main-page-header-wrapper">
                <h1>Just a simple React Redux App</h1>
                <button onClick={handleHeaderButtonClick}>Visit my GitHub</button>
            </div>
        </header>
    )
};

export default MainPageHeader;
