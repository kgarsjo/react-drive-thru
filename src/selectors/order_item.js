import {selectMenuItem} from './menu_item';

export function selectDenormalizedOrderItem(state, orderItemId) {
    const orderItem = selectOrderItem(state, orderItemId);
    return (orderItem === undefined) ? undefined : {
        id: orderItemId,
        menuItem: selectMenuItem(state, orderItem.menu_item_id),
        state: orderItem.state,
    };
}

export function selectDenormalizedOrderItemsByOrder(state, orderId) {
    return Object.keys(state.order_items)
        .map((orderItemId) => { return state.order_items[orderItemId]; })
        .filter((orderItem) => {
            return orderItem.order_id === orderId;
        })
        .map((orderItem) => {
            return selectDenormalizedOrderItem(state, orderItem.id);
        });
}

export function selectOrderItem(state, orderItemId) {
    return state.order_items[orderItemId];
}
