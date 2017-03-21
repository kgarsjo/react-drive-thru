import MenuItems from './menu_items';
import EditOrderActions from './edit_order_actions';
import OrderDetails from './order_details';
import OrderLineItems from './order_line_items';
import React from 'react';

function getEditOrderActions({ order, onOrderCancelClick, onOrderSaveClick }) {
    return <EditOrderActions
        onOrderCancelClick={onOrderCancelClick}
        onOrderSaveClick={onOrderSaveClick}
        orderId={order.id}
    />;
}

function getMenuItems({order, menuItems, onMenuItemClick}) {
    return <MenuItems
        menuItems={menuItems}
        orderId={order.id}
        onMenuItemClick={onMenuItemClick}
    />;
}

function getOrderDetails({ order }) {
    return <OrderDetails
        id={order.id}
        price={order.price}
        state={order.state}
        summary={order.summary}
    />;
}

function getOrderLineItems({order, onOrderItemDelete}) {
    return <OrderLineItems
        orderId={order.id}
        orderItems={order.orderItems}
        onOrderItemDelete={onOrderItemDelete}
    />;
}

export default function EditOrder(props) {
    return (
        <div className='sty_edit_order wd_edit_order'>
            { getEditOrderActions(props) }
            <div className='half_width'>
                { getOrderDetails(props) }
                { getOrderLineItems(props) }
            </div>
            <div className='half_width'>
                { getMenuItems(props) }
            </div>
        </div>
    );
}
