import Order from './order';
import React from 'react';

function getAlert({ alert }) {
    if (alert) {
        return <div className='alert'>
            <h2>{ alert }</h2>
        </div>;
    }
}

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
        <div className='sty_orders wd_orders'>
            { getAlert(props) }
            <div className={'orders'}>
                <table className='orders_table'>
                    <tbody>
                        { mapToChildren(props) }
                    </tbody>
                </table>
            </div>

        </div>
    );
}
