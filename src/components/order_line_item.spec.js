import {shallow} from 'enzyme';
import React from 'react';
import OrderLineItem from './order_line_item';

describe('components/order_line_item', function () {
    var component;
    var id;
    var name;
    var onDelete;
    var price;

    beforeEach(function () {
        id = 1111;
        name = 'Some Delicious Menu Item';
        price = 9499;  // Deliciously expensive (it's in cents)
        onDelete = jest.fn();
        component = shallow(<OrderLineItem
            id={id}
            name={name}
            price={price}
            onDelete={onDelete}
        />);
    });

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('sty_order_line_item')).toEqual(true);
        expect(component.hasClass('wd_order_line_item_' + id)).toEqual(true);
    });

    it('should display the correct name', function () {
        expect(component.find('.wd_name').text()).toEqual(name);
    });

    it('should display the correct price', function () {
        expect(component.find('.wd_price').text()).toEqual('$94.99');
    });

    it('should call onDelete when clicking delete', function () {
        component.find('.wd_delete button').simulate('click');
        expect(onDelete).toBeCalled();
    });
});
