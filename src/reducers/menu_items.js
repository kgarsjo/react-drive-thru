import {ADD_MENU_ITEM} from '../actions/menu_item';

function addMenuItem(state, action) {
    return Object.assign({}, state, {
        [action.id]: {
            id: action.id,
            name: action.name,
            shorthand: action.shorthand,
            price: action.price,
        },
    });
}

export default function menuItemsReducer(state = {}, action = {}) {
    switch(action.type) {
    case ADD_MENU_ITEM:
        return addMenuItem(state, action);
    default:
        return state;
    }
}
