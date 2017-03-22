import {
    ORDER_STATE_FULFILLED,
    changeOrderStateToCancelled,
    changeOrderStateToCompleted,
} from '../actions/order';
import {connect} from 'react-redux';
import {selectDenormalizedFilteredOrders} from '../selectors/order';
import Orders from '../components/orders';

const mapStateToProps = (state) => {
    return {
        orders: selectDenormalizedFilteredOrders(state, (order) => {
            return order.state === ORDER_STATE_FULFILLED;
        }),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderCancelClick: (orderId) =>  {
            dispatch(changeOrderStateToCancelled(orderId));
        },
        onOrderCompleteClick: (orderId) => {
            dispatch(changeOrderStateToCompleted(orderId));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Orders);
