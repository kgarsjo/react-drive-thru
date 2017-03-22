import {shallow} from 'enzyme';
import React from 'react';
import EditOrder from './edit_order';
import MenuItems from './menu_items';
import OrderDetails from './order_details';
import OrderLineItems from './order_line_items';

describe('components/edit_order', function () {
    var component;
    var menuItems;
    var onMenuItemClick;
    var onOrderItemDelete;
    var order;

    beforeEach(function () {
        menuItems = [
            {
                id: 1111,
                name: 'Burger',
                shorthand: 'bgr',
                price: 1234,
            },
        ];
        onMenuItemClick = jest.fn();
        onOrderItemDelete = jest.fn();
        order = {
            id: 2222,
            orderItems: [
                {
                    id: 3333,
                    menuItem: menuItems[0],
                }
            ],
            price: 1234,
            stateFormatted: 'Fulfilled',
        };
        component = shallow(<EditOrder
            menuItems={menuItems}
            onMenuItemClick={onMenuItemClick}
            onOrderItemDelete={onOrderItemDelete}
            order={order}
        />);
    });

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('wd_edit_order')).toEqual(true);
    });

    it('should embed the MenuItems component', function () {
        var matching = component.find(MenuItems);
        expect(matching.length).toEqual(1);
        expect(matching.props().menuItems).toEqual(menuItems);
        expect(matching.props().onMenuItemClick).toEqual(onMenuItemClick);
        expect(matching.props().orderId).toEqual(order.id);
    });

    it('should embed the OrderDetails component', function () {
        var matching = component.find(OrderDetails);
        expect(matching.length).toEqual(1);
        expect(matching.props().id).toEqual(order.id);
        expect(matching.props().price).toEqual(order.price);
        expect(matching.props().state).toEqual(order.stateFormatted);
    });

    it('should embed the OrderLineItems component', function () {
        var matching = component.find(OrderLineItems);
        expect(matching.length).toEqual(1);
        expect(matching.props().onOrderItemDelete).toEqual(onOrderItemDelete);
        expect(matching.props().orderId).toEqual(order.id);
        expect(matching.props().orderItems).toEqual(order.orderItems);
    });
});
