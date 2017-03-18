import {
    ADD_ORDER_ITEM,
    CHANGE_ORDER_ITEM_STATE,
    REMOVE_ORDER_ITEM,
} from '../actions/order_item';

function addOrderItem(state, action) {
    return Object.assign({}, state, {
        [action.id]: {
            id: action.id,
            menu_item_id: action.menu_item_id,
            state: action.state,
        },
    });
}

function changeOrderItemState(state, action) {
    var newState = Object.assign({}, state);
    newState[action.id].state = action.state;
    return newState;
}

function removeOrderItem(state, action) {
    var newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
}

export default function orderItemsReducer(state = {}, action = {}) {
    switch(action.type) {
    case ADD_ORDER_ITEM:
        return addOrderItem(state, action);
    case CHANGE_ORDER_ITEM_STATE:
        return changeOrderItemState(state, action);
    case REMOVE_ORDER_ITEM:
        return removeOrderItem(state, action);
    default:
        return state;
    }
}
