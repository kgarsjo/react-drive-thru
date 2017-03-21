export const CHANGE_ACTIVITY = 'actions:activity:change';

export const ACTIVITY_STATE_EDIT_ORDER = 'state:activity:edit_order';
export const ACTIVITY_STATE_VIEW_FULFILLED_ORDERS = 'state:activity:view_fulfilled_orders';
export const ACTIVITY_STATE_VIEW_OPEN_ORDERS = 'state:activity:view_open_orders';

export function editOrder(order_id) {
    return {
        type: CHANGE_ACTIVITY,
        order_id,
        state: ACTIVITY_STATE_EDIT_ORDER,
    };
}

export function viewFulfilledOrders() {
    return {
        type: CHANGE_ACTIVITY,
        state: ACTIVITY_STATE_VIEW_FULFILLED_ORDERS,
    };
}

export function viewOpenOrders() {
    return {
        type: CHANGE_ACTIVITY,
        state: ACTIVITY_STATE_VIEW_OPEN_ORDERS,
    };
}
