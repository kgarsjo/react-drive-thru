export const ADD_ORDER = 'actions:order:add';
export const CHANGE_ORDER_STATE = 'actions:order:change_state';
export const REMOVE_ORDER = 'actions:order:remove';

export const ADD_ORDER_ITEMS = 'action:order:add_order_items';
export const REMOVE_ORDER_ITEMS = 'actions:order:remove_order_items';
export const REMOVE_ALL_ORDER_ITEMS = 'actions:order:remove_all_order_items';

export const ORDER_STATE_NEW = 'state:order:new';
export const ORDER_STATE_OPEN = 'state:order:open';
export const ORDER_STATE_FULFILLED = 'state:order:fulfilled';
export const ORDER_STATE_COMPLETED = 'state:order:completed';
export const ORDER_STATE_CANCELLED = 'state:order:cancelled';

function wrapInArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    return [value];
}

export function addOrder(id, order_items = []) {
    order_items = wrapInArray(order_items);
    return {
        type: ADD_ORDER,
        id,
        order_items,
        state: ORDER_STATE_NEW,
    };
}

export function addOrderItems(id, order_items = []) {
    order_items = wrapInArray(order_items);
    return {
        type: ADD_ORDER_ITEMS,
        id,
        order_items,
    };
}

export function changeOrderStateToOpen(id) {
    return {
        type: CHANGE_ORDER_STATE,
        id,
        state: ORDER_STATE_OPEN,
    };
}

export function changeOrderStateToFulfilled(id) {
    return {
        type: CHANGE_ORDER_STATE,
        id,
        state: ORDER_STATE_FULFILLED,
    };
}

export function changeOrderStateToCompleted(id) {
    return {
        type: CHANGE_ORDER_STATE,
        id,
        state: ORDER_STATE_COMPLETED,
    };
}

export function changeOrderStateToCancelled(id) {
    return {
        type: CHANGE_ORDER_STATE,
        id,
        state: ORDER_STATE_CANCELLED,
    };
}

export function removeAllOrderItems(id) {
    return {
        type: REMOVE_ALL_ORDER_ITEMS,
        id,
    };
}

export function removeOrder(id) {
    return {
        type: REMOVE_ORDER,
        id,
    };
}

export function removeOrderItems(id, order_items = []) {
    order_items = wrapInArray(order_items);
    return {
        type: REMOVE_ORDER_ITEMS,
        id,
        order_items,
    };
}
