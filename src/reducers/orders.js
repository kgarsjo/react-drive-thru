import {
    ADD_ORDER,
    CHANGE_ORDER_STATE,
    REMOVE_ORDER,
} from '../actions/order';

function addOrder(state, action) {
    return Object.assign({}, state, {
        [action.id]: {
            id: action.id,
            state: action.state,
        },
    });
}

function changeOrderState(state, action) {
    var newState = Object.assign({}, state);
    var order = newState[action.id];
    if (order) {
        newState[action.id].state = action.state;
    }
    return newState;
}

function removeOrder(state, action) {
    var newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
}

export default function ordersReducer(state = {}, action = {}) {
    switch(action.type) {
    case ADD_ORDER:
        return addOrder(state, action);
    case CHANGE_ORDER_STATE:
        return changeOrderState(state, action);
    case REMOVE_ORDER:
        return removeOrder(state, action);
    default:
        return state;
    }
}
