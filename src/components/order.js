import OrderDetails from './order_details';
import OrderLineItems from './order_line_items';
import React from 'react';

export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        };
    }

    getDrawerControl() {
        const className = (this.state.drawerOpen) ? 'close_action' : 'open_action';
        const newDrawerValue = !this.state.drawerOpen;
        const text= (this.state.drawerOpen) ? '[-]' : '[+]';
        return <div
            className={className}
            onClick={() => {
                this.setState({
                    drawerOpen: newDrawerValue,
                });
            }}
        >{ text }</div>;
    }

    getOrderDetails({ order }) {
        return <OrderDetails
            id={order.id}
            price={order.price}
            state={order.stateFormatted}
        />;
    }

    getOrderLineItems({order}) {
        if (this.state.drawerOpen) {
            return <tr className='line_items_container'>
                <OrderLineItems
                    orderId={order.id}
                    orderItems={order.orderItems}
                />
            </tr>;
        }
    }

    getOrderAction(onClick, text, order) {
        if (onClick) {
            return <button
                onClick={() => { onClick(order.id); }}
            >{ text}</button>;
        }
    }

    getOrderActions(props) {
        return <div>
            { this.getOrderAction(props.onOrderEditClick, 'Edit', props.order) }
            { this.getOrderAction(props.onOrderFulfillClick, 'Fulfill', props.order) }
            { this.getOrderAction(props.onOrdeCancelClick, 'Cancel', props.order) }
            { this.getOrderAction(props.onOrderCompleteClick, 'Complete', props.order) }
        </div>;
    }

    render() {
        return (
            <tr className='sty_order wd_order'>
                <td>{ this.getDrawerControl() }</td>
                <td>{ this.getOrderDetails(this.props) }</td>
                <td>{ this.getOrderActions(this.props) }</td>
            </tr>
        );
    }
}
