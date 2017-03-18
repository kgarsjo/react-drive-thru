export const ADD_ORDER_ITEM = 'actions:order_item:add';
export const CHANGE_ORDER_ITEM_STATE = 'actions:order_item:change_state';
export const REMOVE_ORDER_ITEM = 'actions:order_item:remove';

export const ORDER_ITEM_STATE_OPEN = 'state:order_item:open';
export const ORDER_ITEM_STATE_FULFILLED = 'state:order_item:fulfilled';

export function addOrderItem(id, menu_item_id) {
    return {
        type: ADD_ORDER_ITEM,
        id,
        menu_item_id,
        state: ORDER_ITEM_STATE_OPEN,
    };
}

export function changeOrderItemStateToFulfilled(id) {
    return {
        type: CHANGE_ORDER_ITEM_STATE,
        id,
        state: ORDER_ITEM_STATE_FULFILLED,
    };
}

export function changeOrderItemStateToOpen(id) {
    return {
        type: CHANGE_ORDER_ITEM_STATE,
        id,
        state: ORDER_ITEM_STATE_OPEN,
    };
}

export function removeOrderItem(id) {
    return {
        type: REMOVE_ORDER_ITEM,
        id,
    };
}
