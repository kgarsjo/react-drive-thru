import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

var initialState = {
    activity: {},
    menu_items: {
        1: {
            id: 1,
            name: 'Cheeseburger',
            shorthand: 'cbgr',
            price: 399,
        },
        2: {
            id: 2,
            name: 'French Fries',
            shorthand: 'fry',
            price: 199,
        },
        3: {
            id: 3,
            name: 'Soft Drink',
            shorthand: 'soft',
            price: 99,
        },
    },
    order_items: {},
    orders: {},
};

export default createStore(rootReducer, initialState);
