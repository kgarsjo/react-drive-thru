import React from 'react';
import OrderLineItem from './order_line_item';

function mapToChildren({ onOrderItemDelete, orderItems, orderId }) {
    return orderItems.map((orderItem) => {
        const onDelete = (onOrderItemDelete)
            ? () => { onOrderItemDelete(orderItem.id, orderId); }
            : undefined;
        return <OrderLineItem
            key={orderItem.id}
            id={orderItem.id}
            name={orderItem.menuItem.name}
            onDelete={onDelete}
            price={orderItem.menuItem.price}
            state={orderItem.state}
        />;
    });
}

export default function OrderLineItems(props) {
    return (
        <table className='sty_order_line_items wd_order_line_items'>
            <tbody>
                { mapToChildren(props) }
            </tbody>
        </table>
    );
}
