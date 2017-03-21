import {combineReducers} from 'redux';
import activityReducer from './activity';
import menuItemsReducer from './menu_items';
import orderItemsReducer from './order_items';
import ordersReducer from './orders';

export default combineReducers({
    activity: activityReducer,
    menu_items: menuItemsReducer,
    order_items: orderItemsReducer,
    orders: ordersReducer,
});
