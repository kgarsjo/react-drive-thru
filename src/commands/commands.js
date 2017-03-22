import {
    addOrder,
    addOrderItems,
    removeAllOrderItems,
    removeOrder,
    removeOrderItems,
} from '../actions/order';
import {editOrder} from '../actions/activity';
import {getId} from '../utils/id';
import {
    addOrderItem,
    removeOrderItem,
} from '../actions/order_item';

export function addMenuItemToOrder(dispatch, orderId, menuItemId) {
    const newOrderItemId = getId();
    dispatch(addOrderItem(newOrderItemId, menuItemId));
    dispatch(addOrderItems(orderId, newOrderItemId));
}

export function createAndEdiNewtOrder(dispatch) {
    const newOrderId = getId();
    dispatch(addOrder(newOrderId));
    dispatch(editOrder(newOrderId));
}

export function deleteOrderItemFromOrder(dispatch, orderId, orderItemId) {
    dispatch(removeOrderItems(orderId, orderItemId));
    dispatch(removeOrderItem(orderItemId));
}

export function deleteOrder(dispatch, orderId) {
    dispatch(removeAllOrderItems(orderId));
    dispatch(removeOrder(orderId));
}

export function fulfillOrder(dispatch, orderId, orderItemIds) {

}
