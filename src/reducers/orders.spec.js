import ordersReducer from './orders';
import {
    ORDER_STATE_NEW,
    ORDER_STATE_OPEN,
    ORDER_STATE_FULFILLED,
    ORDER_STATE_COMPLETED,
    ORDER_STATE_CANCELLED,

    addOrder,
    changeOrderStateToOpen,
    changeOrderStateToFulfilled,
    changeOrderStateToCompleted,
    changeOrderStateToCancelled,
    removeOrder,
} from '../actions/order';

describe('reducers/orders', function () {
    it('should return an empty object when reducing an undefined state and unknown action', () => {
        expect(ordersReducer(undefined, undefined)).toEqual({});
    });

    it('should return the passed state when reducing a passed state and unknown action', () => {
        var state = { foo: 'bar' };
        expect(ordersReducer(state, undefined)).toEqual(state);
    });

    describe('when reducing addOrder', function () {
        it('should add open order item to empty state', () => {
            var state = {};
            var action = addOrder(1111);
            expect(ordersReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    state: ORDER_STATE_NEW,
                },
            });
        });

        it('should preserve existing order items with different ids', () => {
            var state = {
                1111: {
                    id: 1111,
                    state: ORDER_STATE_NEW,
                },
            };
            var action = addOrder(3333);
            expect(ordersReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    state: ORDER_STATE_NEW,
                },
                3333: {
                    id: 3333,
                    state: ORDER_STATE_NEW,
                },
            });
        });

        it('should replace an order_item with the same id', () => {
            var state = {
                1111: {
                    id: 1111,
                    state: ORDER_STATE_FULFILLED,
                },
            };
            var action = addOrder(1111);
            expect(ordersReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    state: ORDER_STATE_NEW,
                }
            });
        });
    });

    describe('when reducing changeOrderState', function () {
        it('should have no effect with nonexistent id', function () {
            var state = {
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_NEW,
                },
            };
            var action = changeOrderStateToOpen(4444);
            expect(ordersReducer(state, action)).toEqual(state);
        });

        it('should change order state to open with appropriate action', function () {
            var state = {
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_FULFILLED,
                },
            };
            var action = changeOrderStateToOpen(1111);
            expect(ordersReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_OPEN,
                },
            });
        });

        it('should change order state to fulfilled with appropriate action', function () {
            var state = {
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_NEW,
                },
            };
            var action = changeOrderStateToFulfilled(1111);
            expect(ordersReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_FULFILLED,
                },
            });
        });

        it('should change order state to completed with appropriate action', function () {
            var state = {
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_NEW,
                },
            };
            var action = changeOrderStateToCompleted(1111);
            expect(ordersReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_COMPLETED,
                },
            });
        });

        it('should change order state to cancelled with appropriate action', function () {
            var state = {
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_NEW,
                },
            };
            var action = changeOrderStateToCancelled(1111);
            expect(ordersReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_CANCELLED,
                },
            });
        });
    });

    describe('when reducing removeOrder', function () {
        it('should have no effect with a nonexistent id', function () {
            var state = {
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_NEW,
                },
            };
            var action = removeOrder(4444);
            expect(ordersReducer(state, action)).toEqual(state);
        });

        it('should remove an order with an existing id', function () {
            var state = {
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_NEW,
                },
                4444: {
                    id: 4444,
                    order_items: [5555, 6666],
                    state: ORDER_STATE_NEW,
                },
            };
            var action = removeOrder(4444);
            expect(ordersReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    order_items: [2222, 3333],
                    state: ORDER_STATE_NEW,
                },
            });
        });
    });
});
