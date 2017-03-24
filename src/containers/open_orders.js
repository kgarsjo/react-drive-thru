import {
    ORDER_STATE_OPEN,
    changeOrderStateToFulfilled,
} from '../actions/order';
import {connect} from 'react-redux';
import {fulfillOrder} from '../commands/commands';
import {
    selectDenormalizedFilteredOrders,
    selectAlertFromOrders,
} from '../selectors/order';
import Orders from '../components/orders';

const mapStateToProps = (state) => {
    return {
        orders: selectDenormalizedFilteredOrders(state, (order) => {
            return order.state === ORDER_STATE_OPEN;
        }),
        alert: selectAlertFromOrders(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderFulfillClick: (orderId) => {
            fulfillOrder(dispatch, orderId);
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Orders);
