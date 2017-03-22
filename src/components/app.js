import {
    ACTIVITY_STATE_EDIT_ORDER,
    ACTIVITY_STATE_VIEW_FULFILLED_ORDERS,
    ACTIVITY_STATE_VIEW_OPEN_ORDERS,
} from '../actions/activity';
import EditOrder from '../containers/edit_order';
import FulfilledOrders from '../containers/fulfilled_orders';
import OpenOrders from '../containers/open_orders';
import React from 'react';
import Navigation from '../containers/navigation';

const mapActivityStateToElementBuilder = {
    [ACTIVITY_STATE_EDIT_ORDER]: () => { return <EditOrder/>; },
    [ACTIVITY_STATE_VIEW_FULFILLED_ORDERS]: () => { return <FulfilledOrders/>; },
    [ACTIVITY_STATE_VIEW_OPEN_ORDERS]: () => { return <OpenOrders/>; },
};

function getActivity(state, orderId) {
    var noop = () => {};
    var elementBuilder = mapActivityStateToElementBuilder[state];
    elementBuilder = elementBuilder || noop;
    return elementBuilder();
}

export default function App({ state, orderId }) {
    return (
        <div className='wd_app'>
            <Navigation/>
            { getActivity(state, orderId) }
        </div>
    );
}
