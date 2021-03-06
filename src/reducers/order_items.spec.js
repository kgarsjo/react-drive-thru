import orderItemsReducer from './order_items';
import {
    ORDER_ITEM_STATE_FULFILLED,
    ORDER_ITEM_STATE_OPEN,

    addOrderItem,
    changeOrderItemStateToFulfilledByOrderId,
    changeOrderItemStateToOpenByOrderId,
    removeOrderItem,
} from '../actions/order_item';


describe('reducers/order_items', () => {
    it('should return an empty object when reducing an undefined state and unknown action', () => {
        expect(orderItemsReducer(undefined, undefined)).toEqual({});
    });

    it('should return the passed state when reducing a passed state and unknown action', () => {
        var state = { foo: 'bar' };
        expect(orderItemsReducer(state, undefined)).toEqual(state);
    });

    describe('when reducing addOrderItem', () => {
        it('should add open order item to empty state', () => {
            var state = {};
            var action = addOrderItem(1111, 2222, 3333);
            expect(orderItemsReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            });
        });

        it('should preserve existing order items with different ids', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            };
            var action = addOrderItem(4444, 5555, 6666);
            expect(orderItemsReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
                4444: {
                    id: 4444,
                    menu_item_id: 5555,
                    order_id: 6666,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            });
        });

        it('should replace an order_item with the same id', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            };
            var action = addOrderItem(1111, 4444, 5555);
            expect(orderItemsReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    menu_item_id: 4444,
                    order_id: 5555,
                    state: ORDER_ITEM_STATE_OPEN,
                }
            });
        });
    });

    describe('when reducing changeOrderItemStateToFulfilledByOrderId', () => {
        it('should have no effect for nonexistent matches', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            };
            var action = changeOrderItemStateToFulfilledByOrderId(9999);
            expect(orderItemsReducer(state, action)).toEqual(state);
        });

        it('should modify state for open order item', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            };
            var action = changeOrderItemStateToFulfilledByOrderId(3333);
            expect(orderItemsReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_FULFILLED,
                },
            });
        });

        it('should have no effect for fulfilled order item', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_FULFILLED,
                },
            };
            var action = changeOrderItemStateToFulfilledByOrderId(3333);
            expect(orderItemsReducer(state, action)).toEqual(state);
        });
    });

    describe('when reducing changeOrderItemStateToOpen', () => {
        it('should modify state for fulfilled order item', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_FULFILLED,
                },
            };
            var action = changeOrderItemStateToOpenByOrderId(3333);
            expect(orderItemsReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            });
        });

        it('should have no effect for open order item', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            };
            var action = changeOrderItemStateToOpenByOrderId(3333);
            expect(orderItemsReducer(state, action)).toEqual(state);
        });
    });

    describe('when reducing removeOrderItem', () => {
        it('should remove order matching id', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            };
            var action = removeOrderItem(1111);
            expect(orderItemsReducer(state, action)).toEqual({});
        });

        it('should persist other orders with differing ids', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
                3333: {
                    id: 3333,
                    menu_item_id: 4444,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            };
            var action = removeOrderItem(1111);
            expect(orderItemsReducer(state, action)).toEqual({
                3333: {
                    id: 3333,
                    menu_item_id: 4444,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            });
        });

        it('should have no effect if no order_item matches the id', () => {
            var state = {
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            };
            var action = removeOrderItem(2222);
            expect(orderItemsReducer(state, action)).toEqual({
                1111: {
                    id: 1111,
                    menu_item_id: 2222,
                    order_id: 3333,
                    state: ORDER_ITEM_STATE_OPEN,
                },
            });
        });
    });
});
