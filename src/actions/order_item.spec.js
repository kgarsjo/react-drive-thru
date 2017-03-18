import {
    ADD_ORDER_ITEM,
    CHANGE_ORDER_ITEM_STATE,
    REMOVE_ORDER_ITEM,

    ORDER_ITEM_STATE_OPEN,
    ORDER_ITEM_STATE_FULFILLED,

    addOrderItem,
    changeOrderItemStateToFulfilled,
    changeOrderItemStateToOpen,
    removeOrderItem,
} from './order_item';

describe('actions/order_item', () => {
    it('should return an action creating an open order item when calling addOrderItem', function () {
        var actual = addOrderItem(1111, 2222);
        expect(actual).toEqual({
            type: ADD_ORDER_ITEM,
            id: 1111,
            menu_item_id: 2222,
            state: ORDER_ITEM_STATE_OPEN,
        });
    });

    it('should return an action to change state when calling changeOrderItemStateToFulfilled', function () {
        var actual = changeOrderItemStateToFulfilled(1111);
        expect(actual).toEqual({
            type: CHANGE_ORDER_ITEM_STATE,
            id: 1111,
            state: ORDER_ITEM_STATE_FULFILLED,
        });
    });

    it('should return an action to change state when calling changeOrderItemStateToOpen', function () {
        var actual = changeOrderItemStateToOpen(1111);
        expect(actual).toEqual({
            type: CHANGE_ORDER_ITEM_STATE,
            id: 1111,
            state: ORDER_ITEM_STATE_OPEN,
        });
    });

    it('should return an action to remove when calling removeOrderItem', function () {
        var actual = removeOrderItem(1111);
        expect(actual).toEqual({
            type: REMOVE_ORDER_ITEM,
            id: 1111,
        });
    });
});
