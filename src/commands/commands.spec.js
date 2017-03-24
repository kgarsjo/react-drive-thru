import * as commands from './commands';
import * as activityActions from '../actions/activity';
import * as orderActions from '../actions/order';
import * as orderItemActions from '../actions/order_item';


import * as id from '../utils/id';

describe('commands/commands', function () {
    const NEW_ID = 1111;
    var dispatch;

    beforeEach(function () {
        dispatch = jest.fn();
        jest.spyOn(id, 'getId').mockImplementation(() => { return NEW_ID; });
    });

    it('should dispatch addOrderItem when calling addMenuItemToOrder', function () {
        const menuItemId = 2222;
        const orderId = 3333;
        commands.addMenuItemToOrder(dispatch, orderId, menuItemId);
        expect(dispatch).toBeCalledWith(orderItemActions.addOrderItem(NEW_ID, menuItemId, orderId));
    });

    it('should dispatch addOrder and editOrder when calling createAndEditNewOrder', function () {
        commands.createAndEditNewOrder(dispatch);
        expect(dispatch.mock.calls).toEqual([
            [ orderActions.addOrder(NEW_ID) ],
            [ activityActions.editOrder(NEW_ID) ],
        ]);
    });

    it('should dispatch removeOpenOrderItemsByOrder and removeOrder when calling deleteOrder', function () {
        const orderId = 2222;
        commands.deleteOrder(dispatch, orderId);
        expect(dispatch.mock.calls).toEqual([
            [ orderItemActions.removeOpenOrderItemsByOrder(orderId) ],
            [ orderActions.removeOrder(orderId) ],
        ]);
    });

    it('should dispatch removeOpenOrderItemsByOrder and viewFulfilledOrders when calling cancelOrderChanges', function () {
        const orderId = 2222;
        commands.cancelOrderChanges(dispatch, orderId);
        expect(dispatch.mock.calls).toEqual([
            [ orderItemActions.removeOpenOrderItemsByOrder(orderId) ],
            [ activityActions.viewFulfilledOrders() ],
        ]);
    });

    it('should dispatch changeOrderStateToFulfilled and changeOrderItemStateToFulfilledByOrderId when calling fulfillOrder', function () {
        const orderId = 2222;
        commands.fulfillOrder(dispatch, orderId);
        expect(dispatch.mock.calls).toEqual([
            [ orderActions.changeOrderStateToFulfilled(orderId) ],
            [ orderItemActions.changeOrderItemStateToFulfilledByOrderId(orderId) ],
        ]);
    });
});
