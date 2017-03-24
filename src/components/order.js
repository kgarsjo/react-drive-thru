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
            return <div className='line_items_container'>
                <OrderLineItems
                    orderId={order.id}
                    orderItems={order.orderItems}
                />
            </div>;
        }
    }

    getOrderAction(onClick, text, className, order) {
        if (onClick) {
            return <button
                className={className}
                onClick={() => { onClick(order.id); }}
            >{ text}</button>;
        }
    }

    getOrderActions(props) {
        return <div>
            { this.getOrderAction(props.onOrderEditClick, 'Edit', 'wd_edit', props.order) }
            { this.getOrderAction(props.onOrderFulfillClick, 'Fulfill', 'wd_fulfill', props.order) }
            { this.getOrderAction(props.onOrdeCancelClick, 'Cancel', 'wd_cancel', props.order) }
            { this.getOrderAction(props.onOrderCompleteClick, 'Complete', 'wd_complete', props.order) }
        </div>;
    }

    render() {
        return (
            <div className='sty_order wd_order'>
                <div>
                    <div className='fake_row drawer_control'>{ this.getDrawerControl() }</div>
                    <div className='fake_row details'>{ this.getOrderDetails(this.props) }</div>
                    <div className='fake_row actions'>{ this.getOrderActions(this.props) }</div>
                </div>
                { this.getOrderLineItems(this.props) }
            </div>
        );
    }
}
