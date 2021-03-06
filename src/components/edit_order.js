import MenuItems from './menu_items';
import EditOrderActions from './edit_order_actions';
import OrderDetails from './order_details';
import OrderLineItems from './order_line_items';
import React from 'react';

function getEditOrderActions({ order, onOrderCancelClick, onOrderSaveClick }) {
    return <EditOrderActions
        onOrderCancelClick={onOrderCancelClick}
        onOrderSaveClick={onOrderSaveClick}
        order={order}
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
        state={order.stateFormatted}
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
                <div className='bordered'>
                    { getOrderDetails(props) }
                    <div className='line_items_container'>
                        { getOrderLineItems(props) }
                    </div>
                </div>
            </div>
            <div className='half_width'>
                { getMenuItems(props) }
            </div>
        </div>
    );
}
