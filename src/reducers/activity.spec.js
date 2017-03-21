import {
    ACTIVITY_STATE_EDIT_ORDER,
    ACTIVITY_STATE_VIEW_FULFILLED_ORDERS,
    ACTIVITY_STATE_VIEW_OPEN_ORDERS,

    editOrder,
    viewFulfilledOrders,
    viewOpenOrders,
} from '../actions/activity';

import activityReducer from './activity';

describe('reducers/activity', () => {
    it('should return an empty object when reducing an undefined state and unknown action', () => {
        expect(activityReducer(undefined, undefined)).toEqual({});
    });

    it('should return the passed state when reducing a passed state and unknown action', () => {
        var state = { foo: 'bar' };
        expect(activityReducer(state, undefined)).toEqual(state);
    });

    it('should return an edit order state for an edit order action', () => {
        var state = {};
        var action = editOrder(1111);
        expect(activityReducer(state, action)).toEqual({
            state: ACTIVITY_STATE_EDIT_ORDER,
            order_id: 1111,
        });
    });

    it('should return a view-fulfilled state for a view-fulfilled action', () => {
        var state = {};
        var action = viewFulfilledOrders();
        expect(activityReducer(state, action)).toEqual({
            state: ACTIVITY_STATE_VIEW_FULFILLED_ORDERS,
        });
    });

    it('should return a view-open state for a view-open action', () => {
        var state = {};
        var action = viewOpenOrders();
        expect(activityReducer(state, action)).toEqual({
            state: ACTIVITY_STATE_VIEW_OPEN_ORDERS,
        });
    });
});
