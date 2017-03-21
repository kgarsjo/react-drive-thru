import {addOrderItem} from '../actions/order_item';
import {editOrder} from '../actions/activity';
import {ORDER_STATE_NEW, addOrderItems} from '../actions/order';
import {connect} from 'react-redux';
import {getId} from '../utils/id';
import {removeOrderItem} from '../actions/order_item';
import {
    addOrder,
    changeOrderStateToOpen,
    removeAllOrderItems,
    removeOrderItems,
    removeOrder,
} from '../actions/order';
import EditOrder from '../components/edit_order';
import store from '../stores/store';

function getOrderId(state) {
    return state && state.activity && state.activity.order_id;
}

function getCurrentOrder(state) {
    var orderId = getOrderId(state);
    var order = state.orders[orderId];
    return (orderId && order) ? order : undefined;
}

function createMenuItemViewModel(state, menuItemId) {
    return state.menu_items[menuItemId];
}

function createMenuItemViewModels(state) {
    return Object.values(state.menu_items);
}

function createOrderItemViewModel(state, orderItemId) {
    var orderItem = state.order_items[orderItemId];
    var orderItemModel = {
        id: orderItemId,
    };
    orderItemModel.menuItem = createMenuItemViewModel(state, orderItem.menu_item_id);
    return orderItemModel;
}

function getOrderHumanReadableState(order) {
    // @TODO Make human-readable
    return order.state;
}

function getOrderSummary(order) {
    return 'A Summary';
}

function getOrderTotalPrice(order) {
    return order.orderItems.reduce((prior, orderItem) => {
        return prior + orderItem.menuItem.price;
    }, 0);
}

function createOrderViewModel(state) {
    var order = getCurrentOrder(state);
    if (!order) {
        return {};
    }
    var orderModel = {
        id: order.id,
    };
    orderModel.orderItems = order.order_items.map((orderItemId) => {
        return createOrderItemViewModel(state, orderItemId);
    });
    orderModel.price = getOrderTotalPrice(orderModel);
    orderModel.state = getOrderHumanReadableState(order);
    orderModel.summary = getOrderSummary(order);
    return orderModel;
}

const mapStateToProps = (state) => {
    return {
        menuItems: createMenuItemViewModels(state),
        order: createOrderViewModel(state),
    };
};

function resetEditor(dispatch) {
    var newOrderId = getId();
    dispatch(addOrder(newOrderId));
    dispatch(editOrder(newOrderId));
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMenuItemClick: (menuItemId, orderId) => {
            var orderItemId = getId();
            dispatch(addOrderItem(orderItemId, menuItemId));
            dispatch(addOrderItems(orderId, orderItemId));
        },
        onOrderCancelClick: (orderId) => {
            dispatch(removeAllOrderItems(orderId));
            dispatch(removeOrder(orderId));
            resetEditor(dispatch);
        },
        onOrderSaveClick: (orderId) => {
            dispatch(changeOrderStateToOpen(orderId));
            resetEditor(dispatch);
        },
        onOrderItemDelete: (orderItemId, orderId) => {
            dispatch(removeOrderItems(orderId, orderItemId));
            dispatch(removeOrderItem(orderItemId));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditOrder);
