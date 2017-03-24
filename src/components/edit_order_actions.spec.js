import {shallow} from 'enzyme';
import React from 'react';
import EditOrderActions from './edit_order_actions';

describe('./components/edit_order_actions', function () {
    var onOrderCancelClick = jest.fn();
    var onOrderSaveClick = jest.fn();
    var order;
    var component;

    beforeEach(function () {
        order = {
            id: 1111,
            state: 'foo',
        };
        component = shallow(<EditOrderActions
            onOrderCancelClick={onOrderCancelClick}
            onOrderSaveClick={onOrderSaveClick}
            order={order}
        />);
    });

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('sty_edit_order_actions')).toEqual(true);
        expect(component.hasClass('wd_edit_order_actions')).toEqual(true);
    });

    describe('when clicking cancel', function () {
        it('should call the onClick fn', function () {
            component.find('.wd_cancel').simulate('click');
            expect(onOrderCancelClick).toBeCalledWith(order.id, order.state);
        });
    });

    describe('when clicking save', function () {
        it('should call the onClick fn', function () {
            component.find('.wd_save').simulate('click');
            expect(onOrderSaveClick).toBeCalledWith(order.id, order.state);
        });
    });
});
