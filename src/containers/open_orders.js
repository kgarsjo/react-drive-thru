import {
    ORDER_STATE_OPEN,
    changeOrderStateToFulfilled,
} from '../actions/order';
import {connect} from 'react-redux';
import {selectDenormalizedFilteredOrders} from '../selectors/order';
import Orders from '../components/orders';

const mapStateToProps = (state) => {
    return {
        orders: selectDenormalizedFilteredOrders(state, (order) => {
            return order.state === ORDER_STATE_OPEN;
        }),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderFulfillClick: (orderId) => {
            dispatch(changeOrderStateToFulfilled(orderId));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Orders);
