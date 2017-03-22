import {connect} from 'react-redux';
import {viewFulfilledOrders} from '../actions/activity';
import {
    ORDER_STATE_NEW,
    changeOrderStateToOpen
} from '../actions/order';
import {removeOrderItem} from '../actions/order_item';
import {
    addMenuItemToOrder,
    cancelOrderChanges,
    createAndEdiNewtOrder,
    deleteOrder,
} from '../commands/commands';
import {
    getCurrentActivityOrderId,
    selectDenormalizedOrder
} from '../selectors/order';
import {selectAllMenuItems} from '../selectors/menu_item';

import EditOrder from '../components/edit_order';
import store from '../stores/store';

const mapStateToProps = (state) => {
    return {
        menuItems: selectAllMenuItems(state),
        order: selectDenormalizedOrder(
            state,
            getCurrentActivityOrderId(state)
        ),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMenuItemClick: (menuItemId, orderId) => {
            addMenuItemToOrder(dispatch, orderId, menuItemId);
        },
        onOrderCancelClick: (orderId, orderState) => {
            if (orderState === ORDER_STATE_NEW) {
                deleteOrder(dispatch, orderId);
                createAndEdiNewtOrder(dispatch);
            } else {
                cancelOrderChanges(dispatch);
            }
        },
        onOrderSaveClick: (orderId, orderState) => {
            dispatch(changeOrderStateToOpen(orderId));
            if (orderState === ORDER_STATE_NEW) {
                createAndEdiNewtOrder(dispatch);
            } else {
                dispatch(viewFulfilledOrders());
            }
        },
        onOrderItemDelete: (orderItemId, orderId) => {
            dispatch(removeOrderItem(orderItemId));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditOrder);
