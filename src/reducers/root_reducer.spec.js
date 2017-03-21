import rootReducer from './root_reducer';
import {addMenuItem} from '../actions/menu_item';

import {
    ORDER_ITEM_STATE_OPEN,
    addOrderItem,
} from '../actions/order_item';

import {
    ORDER_STATE_NEW,
    addOrder,
} from '../actions/order';

describe('reducers/root_reducer', () => {
    it('should return updated total state when adding a menu_item', function () {
        var state = {};
        var action = addMenuItem(1111, 'Burger', 'bgr', 12.34);
        expect(rootReducer(state, action)).toEqual({
            activity: {},
            menu_items: {
                1111: {
                    id: 1111,
                    name: 'Burger',
                    shorthand: 'bgr',
                    price: 12.34,
                },
            },
            order_items: {},
            orders: {},
        });
    });

    it('should return updated total state when adding an order_item', function () {
        var state = {};
        var menuAction = addMenuItem(1111, 'Burger', 'bgr', 12.34);
        var orderItemAction = addOrderItem(2222, 1111);

        state = rootReducer(state, menuAction);
        expect(rootReducer(state, orderItemAction)).toEqual({
            activity: {},
            menu_items: {
                1111: {
                    id: 1111,
                    name: 'Burger',
                    shorthand: 'bgr',
                    price: 12.34,
                },
            },
            order_items: {
                2222: {
                    id: 2222,
                    menu_item_id: 1111,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            },
            orders: {},
        });
    });

    it('should return updated total state when adding an order', function () {
        var state = {};
        var menuAction = addMenuItem(1111, 'Burger', 'bgr', 12.34);
        var orderItemAction = addOrderItem(2222, 1111);
        var orderAction = addOrder(3333, 2222);

        state = rootReducer(state, menuAction);
        state = rootReducer(state, orderItemAction);
        expect(rootReducer(state, orderAction)).toEqual({
            activity: {},
            menu_items: {
                1111: {
                    id: 1111,
                    name: 'Burger',
                    shorthand: 'bgr',
                    price: 12.34,
                },
            },
            order_items: {
                2222: {
                    id: 2222,
                    menu_item_id: 1111,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            },
            orders: {
                3333: {
                    id: 3333,
                    order_items: [2222],
                    state: ORDER_STATE_NEW,
                },
            },
        });
    });
});
