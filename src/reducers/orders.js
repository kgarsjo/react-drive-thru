import _ from 'underscore';
import {
    ADD_ORDER,
    ADD_ORDER_ITEMS,
    CHANGE_ORDER_STATE,
    REMOVE_ALL_ORDER_ITEMS,
    REMOVE_ORDER,
    REMOVE_ORDER_ITEMS,
} from '../actions/order';

function addOrder(state, action) {
    return Object.assign({}, state, {
        [action.id]: {
            id: action.id,
            order_items: action.order_items,
            state: action.state,
        },
    });
}

function addOrderItems(state, action) {
    var newState = Object.assign({}, state);
    var order = newState[action.id];
    if (order) {
        order.order_items = _.union(order.order_items, action.order_items);
    }
    return newState;
}

function changeOrderState(state, action) {
    var newState = Object.assign({}, state);
    var order = newState[action.id];
    if (order) {
        newState[action.id].state = action.state;
    }
    return newState;
}

function removeAllOrderItems(state, action) {
    var newState = Object.assign({}, state);
    var order = newState[action.id];
    if (order) {
        newState[action.id].order_items = [];
    }
    return newState;
}

function removeOrder(state, action) {
    var newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
}

function removeOrderItems(state, action) {
    var newState = Object.assign({}, state);
    var order = newState[action.id] || {};
    if (order) {
        order.order_items = _.difference(order.order_items, action.order_items);
    }
    return newState;
}

export default function ordersReducer(state = {}, action = {}) {
    switch(action.type) {
    case ADD_ORDER:
        return addOrder(state, action);
    case ADD_ORDER_ITEMS:
        return addOrderItems(state, action);
    case CHANGE_ORDER_STATE:
        return changeOrderState(state, action);
    case REMOVE_ALL_ORDER_ITEMS:
        return removeAllOrderItems(state, action);
    case REMOVE_ORDER:
        return removeOrder(state, action);
    case REMOVE_ORDER_ITEMS:
        return removeOrderItems(state, action);
    default:
        return state;
    }
}
