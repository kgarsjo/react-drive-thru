import {connect} from 'react-redux';
import {createAndEditNewOrder} from '../commands/commands';
import {
    viewFulfilledOrders,
    viewOpenOrders,
} from '../actions/activity';
import {getCurrentActivity} from '../selectors/activity';
import Navigation from '../components/navigation';

const mapStateToProps = (state) => {
    return {
        currentActivity: getCurrentActivity(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateOrderClick: () => {
            createAndEditNewOrder(dispatch);
        },
        onViewFulfilledOrdersClick: () => {
            dispatch(viewFulfilledOrders());
        },
        onViewOpenOrdersClick: () => {
            dispatch(viewOpenOrders());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
