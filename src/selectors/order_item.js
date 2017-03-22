import {selectMenuItem} from './menu_item';

export function selectDenormalizedOrderItem(state, orderItemId) {
    const orderItem = selectOrderItem(state, orderItemId);
    return (orderItem === undefined) ? undefined : {
        id: orderItemId,
        menuItem: selectMenuItem(state, orderItem.menu_item_id),
    };
}

export function selectDenormalizedOrderItems(state, orderItemIds) {
    return orderItemIds
        .map((orderItemId) => {
            return selectDenormalizedOrderItem(state, orderItemId);
        })
        .filter((orderItem) => {
            return orderItem !== undefined;
        });
}

export function selectOrderItem(state, orderItemId) {
    return state.order_items[orderItemId];
}
