export const ADD_ORDER_ITEM = 'actions:order_item:add';
export const CHANGE_ORDER_ITEM_STATE_BY_ORDER_ID = 'actions:order_item:change_state_by_order_id';
export const REMOVE_ORDER_ITEM = 'actions:order_item:remove';
export const REMOVE_OPEN_ORDER_ITEMS_BY_ORDER = 'actions:order_item:remove_open_by_order';

export const ORDER_ITEM_STATE_OPEN = 'state:order_item:open';
export const ORDER_ITEM_STATE_FULFILLED = 'state:order_item:fulfilled';

export function addOrderItem(id, menu_item_id, order_id) {
    return {
        type: ADD_ORDER_ITEM,
        id,
        menu_item_id,
        order_id,
        state: ORDER_ITEM_STATE_OPEN,
    };
}

export function changeOrderItemStateToFulfilledByOrderId(order_id) {
    return {
        type: CHANGE_ORDER_ITEM_STATE_BY_ORDER_ID,
        order_id,
        state: ORDER_ITEM_STATE_FULFILLED,
    };
}

export function changeOrderItemStateToOpenByOrderId(order_id) {
    return {
        type: CHANGE_ORDER_ITEM_STATE_BY_ORDER_ID,
        order_id,
        state: ORDER_ITEM_STATE_OPEN,
    };
}

export function removeOrderItem(id) {
    return {
        type: REMOVE_ORDER_ITEM,
        id,
    };
}

export function removeOpenOrderItemsByOrder(order_id) {
    return {
        type: REMOVE_OPEN_ORDER_ITEMS_BY_ORDER,
        order_id,
        state: ORDER_ITEM_STATE_OPEN,
    };
}
