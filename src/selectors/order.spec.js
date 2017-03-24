import {
    ORDER_STATE_OPEN,
    ORDER_STATE_FULFILLED,
} from '../actions/order';
import * as selector from './order';

describe('selectors/order', function () {
    describe('when calling getCurrentActivityOrderId', function () {
        it('shoud return activity order id when calling getCurrentActivityOrderId', function () {
            const state = {
                activity: {
                    order_id: 1111,
                },
            };
            expect(selector.getCurrentActivityOrderId(state)).toEqual(1111);
        });

        it('should return undefined with no activity order id', function () {
            const state = {
                activity: {},
            };
            expect(selector.getCurrentActivityOrderId(state)).not.toBeDefined();
        });
    });

    describe('when calling selectAlertFromOrders', function () {
        it('should return undefined with no orders', function () {
            const state = {
                orders: {}
            };
            expect(selector.selectAlertFromOrders(state)).not.toBeDefined();
        });

        it('should return undefined with 4 orders but less than 4 Open Orders', function () {
            const state = {
                orders: {
                    1111: { state: ORDER_STATE_OPEN },
                    2222: { state: ORDER_STATE_OPEN },
                    3333: { state: ORDER_STATE_OPEN },
                    4444: { state: ORDER_STATE_FULFILLED },
                }
            };
            expect(selector.selectAlertFromOrders(state)).not.toBeDefined();
        });

        it('should return undefined with 4 Open Orders', function () {
            const state = {
                orders: {
                    1111: { state: ORDER_STATE_OPEN },
                    2222: { state: ORDER_STATE_OPEN },
                    3333: { state: ORDER_STATE_OPEN },
                    4444: { state: ORDER_STATE_OPEN },
                }
            };
            expect(selector.selectAlertFromOrders(state)).not.toBeDefined();
        });

        it('should return alert with more than 4 Open Orders', function () {
            const state = {
                orders: {
                    1111: { state: ORDER_STATE_OPEN },
                    2222: { state: ORDER_STATE_OPEN },
                    3333: { state: ORDER_STATE_OPEN },
                    4444: { state: ORDER_STATE_OPEN },
                    5555: { state: ORDER_STATE_OPEN },
                }
            };
            expect(selector.selectAlertFromOrders(state)).toEqual('Alert: More than 4 Open Orders');
        });
    });

    describe('when calling selectDenormalizedFilteredOrders', function () {
        it('should return an empty array with no orders', function () {
            const state = {
                activity: {},
                menu_items: {},
                order_items: {},
                orders: {},
            };
            expect(selector.selectDenormalizedFilteredOrders(state, () => {
                return true;
            })).toEqual([]);
        });

        it('should return an empty array with no matching orders', function () {
            const state = {
                activity: {},
                menu_items: {},
                order_items: {},
                orders: {
                    1111: {
                        id: 1111,
                        state: ORDER_STATE_OPEN,
                    },
                },
            };
            expect(selector.selectDenormalizedFilteredOrders(state, (order) => {
                return order.state === ORDER_STATE_FULFILLED;
            })).toEqual([]);
        });

        it('should return an array of denormalized orders with matching orders', function () {
            const state = {
                activity: {},
                menu_items: {
                    3333: {
                        name: 'Burger',
                        shorthand: 'bgr',
                        price: 1111,
                    }
                },
                order_items: {
                    2222: {
                        id: 2222,
                        menu_item_id: 3333,
                        order_id: 1111,
                        state: 'foo',
                    }
                },
                orders: {
                    1111: {
                        id: 1111,
                        state: ORDER_STATE_OPEN,
                    },
                },
            };
            expect(selector.selectDenormalizedFilteredOrders(state, (order) => {
                return order.state === ORDER_STATE_OPEN;
            })).toEqual([{
                id: 1111,
                orderItems: [
                    {
                        id: 2222,
                        menuItem: {
                            name: 'Burger',
                            price: 1111,
                            shorthand: 'bgr',
                        },
                        state: 'foo',
                    },
                ],
                price: 1111,
                state: ORDER_STATE_OPEN,
                stateFormatted: 'Open',
            }]);
        });
    });

    describe('when calling selectDenormalizedOrder', function () {
        it('should return undefined with unknown order id', function () {
            const state = {
                activity: {},
                menu_items: {},
                order_items: {},
                orders: {},
            };
            expect(selector.selectDenormalizedOrder(state, 1111)).not.toBeDefined();
        });
    });

    describe('when calling selectOrderFormattedState', function () {
        it('should return undefined with unknown order id', function () {
            const state = {
                activity: {},
                menu_items: {},
                order_items: {},
                orders: {},
            };
            expect(selector.selectOrderFormattedState(state, 1111)).not.toBeDefined();
        });
    });

    describe('when calling selectOrderTotalPrice', function () {
        it('should return undefined with unknown order id', function () {
            const state = {
                activity: {},
                menu_items: {},
                order_items: {},
                orders: {},
            };
            expect(selector.selectOrderTotalPrice(state, 1111)).not.toBeDefined();
        });
    });
});
