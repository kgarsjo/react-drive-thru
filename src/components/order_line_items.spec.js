import {mount} from 'enzyme';
import React from 'react';
import OrderLineItem from './order_line_item';
import OrderLineItems from './order_line_items';

describe('components/order_line_items', function () {
    var onOrderItemDelete;
    var orderId;
    var orderItems;
    var component;

    beforeEach(function () {
        onOrderItemDelete = jest.fn();
        orderId = 1111;
        orderItems = [
            {
                id: 2222,
                menuItem: {
                    name: 'Burger',
                    price: 1000,
                },
            },
            {
                id: 3333,
                menuItem: {
                    name: 'Fries',
                    price: 2000,
                },
            },
            {
                id: 4444,
                menuItem: {
                    name: 'Drink',
                    price: 3000,
                },
            },
        ];
        component = mount(<OrderLineItems
            onOrderItemDelete={onOrderItemDelete}
            orderId={orderId}
            orderItems={orderItems}
        />);
    });

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('sty_order_line_items')).toEqual(true);
        expect(component.hasClass('wd_order_line_items')).toEqual(true);
    });

    it('should have 3 child OrderLineItem elements', function () {
        expect(component.find(OrderLineItem).length).toEqual(3);
    });

    it('should have correct names for each OrderLineItem', function () {
        var matching = component.find(OrderLineItem);
        var expected = orderItems.map((orderItem) => { return orderItem.menuItem.name; });
        var actual = matching.map((matched) => { return matched.find('.wd_name').text(); });
        expect(actual).toEqual(expected);
    });

    it('should call onOrderItemDelete when clicking delete on the line item', function () {
        var matching = component.find(OrderLineItem).first();
        matching.find('.wd_delete').simulate('click');
        expect(onOrderItemDelete).toBeCalledWith(orderItems[0].id, orderId);
    });
});
