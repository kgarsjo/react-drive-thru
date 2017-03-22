import Order from './order';
import React from 'react';

function mapToChildren(props) {
    return props.orders.map((order) => {
        return <Order
            key={order.id}
            order={order}
            onOrdeCancelClick={props.onOrderCancelClick}
            onOrderCompleteClick={props.onOrderCompleteClick}
            onOrderFulfillClick={props.onOrderFulfillClick}
            onOrderEditClick={props.onOrderEditClick}
        />;
    });
}

export default function Orders(props) {
    return (
        <table className='sty_orders wd_orders'>
            <tbody>
                { mapToChildren(props) }
            </tbody>
        </table>
    );
}
