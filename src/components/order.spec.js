import {mount} from 'enzyme';
import React from 'react';
import Order from './order';

describe('components/order', function () {
    var component;
    var orderId = 1111;
    var order;
    var onOrderCancelClick = jest.fn();
    var onOrderCompleteClick = jest.fn();
    var onOrderFulfillClick = jest.fn();
    var onOrderEditClick = jest.fn();

    beforeEach(function () {
        order = {
            id: orderId,
            price: 1499,
            stateFormatted: 'Open',
            orderItems: [],
        };

        component = renderComponent(order);
    });

    function renderComponent(order, cancelFn, completeFn, fulfillFn, editFn) {
        return mount(<Order
            order={order}
            onOrdeCancelClick={cancelFn}
            onOrderCompleteClick={completeFn}
            onOrderFulfillClick={fulfillFn}
            onOrderEditClick={editFn}
        />);
    }

    function assertDoesNotHave(className) {
        it('should not have an element matching ' + className, function () {
            expect(component.hasClass(className)).toEqual(false);
        });
    }

    function assertClickingButtonCalls(className, fn) {
        it('should callback when clicking ' + className, function () {
            component.find(className).simulate('click');
            expect(fn).toHaveBeenCalledWith(orderId);
        });
    }

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('sty_order')).toEqual(true);
        expect(component.hasClass('wd_order')).toEqual(true);
    });

    describe('when rendered with only cancelFn', function () {
        beforeEach(function () {
            component = renderComponent(order, onOrderCancelClick);
        });
        assertDoesNotHave('wd_complete');
        assertDoesNotHave('wd_edit');
        assertDoesNotHave('wd_fulfill');
        assertClickingButtonCalls('.wd_cancel', onOrderCancelClick);
    });

    describe('when rendered with only completeFn', function () {
        beforeEach(function () {
            component = renderComponent(order, undefined, onOrderCompleteClick);
        });
        assertDoesNotHave('wd_cancel');
        assertDoesNotHave('wd_edit');
        assertDoesNotHave('wd_fulfill');
        assertClickingButtonCalls('.wd_complete', onOrderCompleteClick);
    });

    describe('when rendered with only fulfillFn', function () {
        beforeEach(function () {
            component = renderComponent(order, undefined, undefined, onOrderFulfillClick);
        });

        assertDoesNotHave('wd_cancel');
        assertDoesNotHave('wd_complete');
        assertDoesNotHave('wd_edit');
        assertClickingButtonCalls('.wd_fulfill', onOrderFulfillClick);
    });

    describe('when rendered with only editFn', function () {
        beforeEach(function () {
            component = renderComponent(order, undefined, undefined, undefined, onOrderEditClick);
        });
        assertDoesNotHave('wd_cancel');
        assertDoesNotHave('wd_complete');
        assertDoesNotHave('wd_fulfill');
        assertClickingButtonCalls('.wd_edit', onOrderEditClick);
    });
});
