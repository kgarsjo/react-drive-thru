import {connect} from 'react-redux';
import {changeOrderStateToOpen} from '../actions/order';
import {
    addMenuItemToOrder,
    createAndEdiNewtOrder,
    deleteOrderItemFromOrder,
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
        onOrderCancelClick: (orderId) => {
            deleteOrder(dispatch, orderId);
            createAndEdiNewtOrder(dispatch);
        },
        onOrderSaveClick: (orderId) => {
            dispatch(changeOrderStateToOpen(orderId));
            createAndEdiNewtOrder(dispatch);
        },
        onOrderItemDelete: (orderItemId, orderId) => {
            deleteOrderItemFromOrder(dispatch, orderId, orderItemId);
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditOrder);
