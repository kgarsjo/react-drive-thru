import {addMenuItem} from '../actions/menu_item';
import menuItemsReducer from './menu_items';

describe('reducers/menu_items', function () {
    it('should return an empty object when reducing an undefined state and unknown action', function () {
        expect(menuItemsReducer(undefined, undefined)).toEqual({});
    });

    it('should return the passed state when reducing a passed state and unknown action', function () {
        var state = { foo: 'bar' };
        expect(menuItemsReducer(state, undefined)).toEqual(state);
    });

    it('should return a state containing the given menu item when reducing an addMenuItem action', function () {
        var state = {};
        var action = addMenuItem(1111, 'Burger', 'bgr', 12.34);
        expect(menuItemsReducer(state, action)).toEqual({
            1111: {
                id: 1111,
                name: 'Burger',
                shorthand: 'bgr',
                price: 12.34,
            },
        });
    });

    it('should preserve existing state entries when reducing an addMenuItem action', function () {
        var state = {
            1111: {
                id: 1111,
                name: 'Burger',
                shorthand: 'bgr',
                price: 12.34,
            },
        };
        var action = addMenuItem(2222, 'Fries', 'fry', 3.45);
        expect(menuItemsReducer(state, action)).toEqual({
            1111: {
                id: 1111,
                name: 'Burger',
                shorthand: 'bgr',
                price: 12.34,
            },
            2222: {
                id: 2222,
                name: 'Fries',
                shorthand: 'fry',
                price: 3.45,
            },
        });
    });
});
