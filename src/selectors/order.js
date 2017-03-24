import {selectDenormalizedOrderItemsByOrder} from './order_item';
import {
    ORDER_STATE_NEW,
    ORDER_STATE_OPEN,
    ORDER_STATE_FULFILLED,
    ORDER_STATE_COMPLETED,
    ORDER_STATE_CANCELLED,
} from '../actions//order';

const orderStatesToFormattedValues = {
    [ORDER_STATE_NEW]: 'New',
    [ORDER_STATE_OPEN]: 'Open',
    [ORDER_STATE_FULFILLED]: 'Fulfilled',
    [ORDER_STATE_COMPLETED]: 'Completed',
    [ORDER_STATE_CANCELLED]: 'Cancelled',
};

function getOrderSummary(order) {
    return 'A Summary';
}

export function getCurrentActivityOrderId(state) {
    return state && state.activity && state.activity.order_id;
}

export function selectAlertFromOrders(state) {
    const openOrderCount = Object.keys(state.orders)
        .map((orderId) => {
            return state.orders[orderId];
        })
        .filter((order) => {
            return order.state === ORDER_STATE_OPEN;
        }).length;
    if (openOrderCount > 4) {
        return 'Alert: More than 4 Open Orders';
    }
}

export function selectDenormalizedFilteredOrders(state, filter) {
    return selectFilteredOrders(state, filter)
        .map((order) => {
            return selectDenormalizedOrder(state, order.id);
        })
        .filter((order) => {
            return order !== undefined;
        });

}

export function selectDenormalizedOrder(state, orderId) {
    const order = selectOrder(state, orderId);
    if (!order) {
        return undefined;
    }
    return (order === undefined) ? undefined : {
        id: order.id,
        orderItems: selectDenormalizedOrderItemsByOrder(state, order.id),
        price: selectOrderTotalPrice(state, orderId),
        state: order.state,
        stateFormatted: selectOrderFormattedState(state, orderId),
    };
}

export function selectFilteredOrders(state, filter) {
    return Object.keys(state.orders)
        .map((orderId) => { return state.orders[orderId]; })
        .filter(filter)
        .map((order) => {
            return order;
        });
}

export function selectOrder(state, orderId) {
    return state.orders[orderId];
}

export function selectOrders(state, orderIds) {
    return orderIds
        .map((orderId) => {
            return selectOrder(orderId);
        })
        .filter((order) => {
            return order !== undefined;
        });
}

export function selectOrderFormattedState(state, orderId) {
    const order = selectOrder(state, orderId);
    return (order === undefined)
        ? undefined
        : orderStatesToFormattedValues[order.state];
}

export function selectOrderTotalPrice(state, orderId) {
    const order = selectOrder(state, orderId);
    return (order === undefined)
        ? undefined
        : selectDenormalizedOrderItemsByOrder(state, order.id)
            .reduce((prior, orderItem) => {
                return prior + orderItem.menuItem.price;
            }, 0);
}
