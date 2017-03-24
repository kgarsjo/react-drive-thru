import {
    ORDER_STATE_OPEN,
    ORDER_STATE_FULFILLED,
} from '../actions//order';
import * as selector from './order';

describe('selectors/order', function () {
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
});
