import React from 'react';

import {ReactComponent as ListItemIcon} from '../../../../../images/item_icon.svg';

import './MainPageListItem.css';

const MainPageListItem = ({className, key, id, value}) => {

    return (
        <li key={key} className={className}>
            <ListItemIcon/>
            {id}
            {value}
        </li>
    )
};

export default React.memo(MainPageListItem);
