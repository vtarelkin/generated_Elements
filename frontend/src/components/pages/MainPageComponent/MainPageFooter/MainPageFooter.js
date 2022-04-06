import React from 'react';

import {appConstants} from '../../../../constants/appConstants';

import './MainPageFooter.css';

const MainPageFooter = () => (
    <footer className="main-page-footer">
        <span>{appConstants.COPYRIGHT_TEXT}</span>
    </footer>
);

export default MainPageFooter;
