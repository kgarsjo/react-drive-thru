import {
    ORDER_ITEM_STATE_OPEN,
    ORDER_ITEM_STATE_FULFILLED
} from '../actions/order_item';
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
            orderItems: [],
        };
        component = renderComponent();
    });

    function renderComponent(){
        return shallow(<EditOrderActions
            onOrderCancelClick={onOrderCancelClick}
            onOrderSaveClick={onOrderSaveClick}
            order={order}
        />);
    }

    function assertSaveButtonDisabled() {
        it('should disable the save button', function () {
            expect(component.find('.wd_save').prop('disabled')).toEqual(true);
        });
    }

    function assertSaveButtonEnabled() {
        it('should disable the save button', function () {
            expect(component.find('.wd_save').prop('disabled')).toEqual(false);
        });
    }

    function assertOnSaveClickedBehavior() {
        it('should call the onClick fn when clicking save', function () {
            component.find('.wd_save').simulate('click');
            expect(onOrderSaveClick).toBeCalledWith(order.id, order.state);
        });
    }

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

    describe('with no orderItems', function () {
        beforeEach(function () {
            order.orderItems = [];
            component = renderComponent();
        });
        assertSaveButtonDisabled();
    });

    describe('with all open orderItems', function () {
        beforeEach(function () {
            order.orderItems = [
                { state: ORDER_ITEM_STATE_OPEN }
            ];
            component = renderComponent();
        });
        assertSaveButtonEnabled();
        assertOnSaveClickedBehavior();
    });

    describe('with mixed open and fulfilled orderItems', function () {
        beforeEach(function () {
            order.orderItems = [
                { state: ORDER_ITEM_STATE_OPEN },
                { state: ORDER_ITEM_STATE_FULFILLED },
            ];
            component = renderComponent();
        });
        assertSaveButtonEnabled();
        assertOnSaveClickedBehavior();
    });

    describe('with all fulfilled orderItems', function () {
        beforeEach(function () {
            order.orderItems = [
                { state: ORDER_ITEM_STATE_FULFILLED }
            ];
            component = renderComponent();
        });
        assertSaveButtonDisabled();
    });
});
