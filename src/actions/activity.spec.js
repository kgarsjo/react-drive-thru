import {
    CHANGE_ACTIVITY,

    ACTIVITY_STATE_EDIT_ORDER,
    ACTIVITY_STATE_VIEW_FULFILLED_ORDERS,
    ACTIVITY_STATE_VIEW_OPEN_ORDERS,

    editOrder,
    viewFulfilledOrders,
    viewOpenOrders,
} from './activity';

describe('actions/activity', () => {
    it('should return an action when calling editOrder', function () {
        var actual = editOrder(1111);
        expect(actual).toEqual({
            type: CHANGE_ACTIVITY,
            order_id: 1111,
            state: ACTIVITY_STATE_EDIT_ORDER,
        });
    });

    it('should return an action when calling viewFulfilledOrders', function () {
        var actual = viewFulfilledOrders(1111);
        expect(actual).toEqual({
            type: CHANGE_ACTIVITY,
            state: ACTIVITY_STATE_VIEW_FULFILLED_ORDERS,
        });
    });

    it('should return an action when calling viewOpenOrders', function () {
        var actual = viewOpenOrders(1111);
        expect(actual).toEqual({
            type: CHANGE_ACTIVITY,
            state: ACTIVITY_STATE_VIEW_OPEN_ORDERS,
        });
    });
});
