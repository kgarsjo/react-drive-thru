import {
    addOrder,
    changeOrderStateToFulfilled,
    removeOrder,
} from '../actions/order';
import {
    editOrder,
    viewFulfilledOrders,
} from '../actions/activity';
import {getId} from '../utils/id';
import {
    addOrderItem,
    changeOrderItemStateToFulfilledByOrderId,
    removeOrderItem,
    removeOpenOrderItemsByOrder,
} from '../actions/order_item';

export function addMenuItemToOrder(dispatch, orderId, menuItemId) {
    const newOrderItemId = getId();
    dispatch(addOrderItem(newOrderItemId, menuItemId, orderId));
}

export function createAndEditNewOrder(dispatch) {
    const newOrderId = getId();
    dispatch(addOrder(newOrderId));
    dispatch(editOrder(newOrderId));
}

export function deleteOrder(dispatch, orderId) {
    dispatch(removeOpenOrderItemsByOrder(orderId));
    dispatch(removeOrder(orderId));
}

export function cancelOrderChanges(dispatch, orderId) {
    dispatch(removeOpenOrderItemsByOrder(orderId));
    dispatch(viewFulfilledOrders());
}

export function fulfillOrder(dispatch, orderId) {
    dispatch(changeOrderStateToFulfilled(orderId));
    dispatch(changeOrderItemStateToFulfilledByOrderId(orderId));
}
