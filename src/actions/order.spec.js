import {
    ADD_ORDER,
    ADD_ORDER_ITEMS,
    CHANGE_ORDER_STATE,
    REMOVE_ALL_ORDER_ITEMS,
    REMOVE_ORDER,
    REMOVE_ORDER_ITEMS,

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
} from './order';

describe('actions/order', function () {
    describe('when calling addOrder', function () {
        it('should return an action', function () {
            var actual = addOrder(1111);
            expect(actual).toEqual({
                type: ADD_ORDER,
                id: 1111,
                state: ORDER_STATE_NEW,
            });
        });
    });

    it('should return an action when calling changeOrderStateToOpen', function () {
        var actual = changeOrderStateToOpen(1111);
        expect(actual).toEqual({
            type: CHANGE_ORDER_STATE,
            id: 1111,
            state: ORDER_STATE_OPEN,
        });
    });

    it('should return an action when calling changeOrderStateToFulfilled', function () {
        var actual = changeOrderStateToFulfilled(1111);
        expect(actual).toEqual({
            type: CHANGE_ORDER_STATE,
            id: 1111,
            state: ORDER_STATE_FULFILLED,
        });
    });

    it('should return an action when calling changeOrderStateToCompleted', function () {
        var actual = changeOrderStateToCompleted(1111);
        expect(actual).toEqual({
            type: CHANGE_ORDER_STATE,
            id: 1111,
            state: ORDER_STATE_COMPLETED,
        });
    });

    it('should return an action when calling changeOrderStateToCancelled', function () {
        var actual = changeOrderStateToCancelled(1111);
        expect(actual).toEqual({
            type: CHANGE_ORDER_STATE,
            id: 1111,
            state: ORDER_STATE_CANCELLED,
        });
    });

    it('should return an action when calling removeOrder', function () {
        var actual = removeOrder(1111);
        expect(actual).toEqual({
            type: REMOVE_ORDER,
            id: 1111,
        });
    });
});
