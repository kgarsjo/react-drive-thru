import {
    ADD_ORDER_ITEM,
    CHANGE_ORDER_ITEM_STATE_BY_ORDER_ID,
    REMOVE_ORDER_ITEM,
    REMOVE_OPEN_ORDER_ITEMS_BY_ORDER,
} from '../actions/order_item';

function addOrderItem(state, action) {
    return Object.assign({}, state, {
        [action.id]: {
            id: action.id,
            menu_item_id: action.menu_item_id,
            order_id: action.order_id,
            state: action.state,
        },
    });
}

function changeOrderItemStateByOrderId(state, action) {
    var newState = Object.assign({}, state);
    Object.keys(newState)
        .map((newStateId) => {
            return newState[newStateId];
        })
        .filter((orderItem) => {
            return orderItem.order_id === action.order_id;
        })
        .forEach(function (orderItem) {
            orderItem.state = action.state;
        });
    return newState;
}

function removeOrderItem(state, action) {
    var newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
}

function removeOpenOrderItemsByOrder(state, action) {
    var newState = Object.assign({}, state);
    Object.keys(newState)
        .map((orderItemId) => { return newState[orderItemId]; })
        .filter((orderItem) => {
            const shouldRemove = (action.orderId === orderItem.order_id) && (action.state === orderItem.state);
            return !shouldRemove;
        });
    return newState;
}

export default function orderItemsReducer(state = {}, action = {}) {
    switch(action.type) {
    case ADD_ORDER_ITEM:
        return addOrderItem(state, action);
    case CHANGE_ORDER_ITEM_STATE_BY_ORDER_ID:
        return changeOrderItemStateByOrderId(state, action);
    case REMOVE_ORDER_ITEM:
        return removeOrderItem(state, action);
    case REMOVE_OPEN_ORDER_ITEMS_BY_ORDER:
        return removeOpenOrderItemsByOrder(state, action);
    default:
        return state;
    }
}
