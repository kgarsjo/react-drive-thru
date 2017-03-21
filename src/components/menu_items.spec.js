import {mount} from 'enzyme';
import React from 'react';
import MenuItemButton from './menu_item_button';
import MenuItems from './menu_items';

describe('components/menu_items', function () {
    var menuItems;
    var onMenuItemClick;
    var orderId;
    var component;
    beforeEach(function () {
        onMenuItemClick = jest.fn();
        orderId = 1111;
        menuItems = [
            {
                shorthand: 'bgr',
            },
            {
                shorthand: 'fry',
            },
            {
                shorthand: 'softdrink',
            },
        ];
        component = mount(<MenuItems
            menuItems={menuItems}
            onMenuItemClick={onMenuItemClick}
            orderId={orderId}
        />);
    });

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('sty_menu_items')).toEqual(true);
        expect(component.hasClass('wd_menu_items')).toEqual(true);
    });

    it('should have 3 child MenuItemButton elements', function () {
        expect(component.find(MenuItemButton).length).toEqual(3);
    });

    it('should have correct shorthand labels for each MenuItemButton', function () {
        var matching = component.find(MenuItemButton);
        var expected = menuItems.map((menuItem) => { return menuItem.shorthand; });
        var actual = matching.map((matched) => { return matched.find('button').text(); });
        expect(actual).toEqual(expected);
    });

    it('should call onOrderItemDelete when clicking delete on the line item', function () {
        var matching = component.find(MenuItemButton).first();
        matching.simulate('click');
        expect(onMenuItemClick).toBeCalledWith(menuItems[0].id, orderId);
    });
});
