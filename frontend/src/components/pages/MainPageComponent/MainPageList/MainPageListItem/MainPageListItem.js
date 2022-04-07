import React, {useMemo} from 'react';
import isEqual from 'lodash/isEqual';
import {useSelector} from 'react-redux';

import {ReactComponent as ListItemIcon} from '../../../../../images/item_icon.svg';

import './MainPageListItem.css';

const MainPageListItem = ({style, index, className}) => {

    const {listItems} = useSelector(store => store.itemsListReducer, isEqual);

    const currentListItem = useMemo(() => listItems[index], [listItems, index]);

    return (
        <div style={style}>
            <li className={className}>
                <ListItemIcon/>
                <span>{currentListItem.id}</span>
                <span>{currentListItem.value}</span>
            </li>
        </div>
    )
};

export default React.memo(MainPageListItem);
