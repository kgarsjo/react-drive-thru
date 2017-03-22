import {
    ACTIVITY_STATE_EDIT_ORDER,
    ACTIVITY_STATE_VIEW_FULFILLED_ORDERS,
    ACTIVITY_STATE_VIEW_OPEN_ORDERS,
} from '../actions/activity';
import React from 'react';

function getIsSelected(expectedState, actualState) {
    return (expectedState === actualState) ? 'selected' : '';
}

export default function Navigation({ currentActivity, onCreateOrderClick, onViewFulfilledOrdersClick, onViewOpenOrdersClick }) {
    return (
        <nav className='sty_navigation wd_navigation'>
            <ul>
                <li
                    className={ getIsSelected(ACTIVITY_STATE_EDIT_ORDER, currentActivity) }
                    onClick={onCreateOrderClick}
                ><a>Take An Order</a></li>
                <li
                    className={ getIsSelected(ACTIVITY_STATE_VIEW_OPEN_ORDERS, currentActivity) }
                    onClick={onViewOpenOrdersClick}
                >
                    <a>View Open Orders</a>
                </li>
                <li
                    className={ getIsSelected(ACTIVITY_STATE_VIEW_FULFILLED_ORDERS, currentActivity) }
                    onClick={onViewFulfilledOrdersClick}
                >
                    <a>View Fulfilled Orders</a><
                /li>
            </ul>
        </nav>
    );
}
