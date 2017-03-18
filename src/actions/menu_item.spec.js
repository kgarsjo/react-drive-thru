import { ADD_MENU_ITEM, addMenuItem } from './menu_item';

describe('actions/menu_item', () => {
    it('should return an action when calling addMenuItem', function () {
        var actual = addMenuItem(1111, 'Delicious Burger', 'dburger', 7.95);
        expect(actual).toEqual({
            type: ADD_MENU_ITEM,
            id: 1111,
            name: 'Delicious Burger',
            shorthand: 'dburger',
            price: 7.95
        });
    });
});
