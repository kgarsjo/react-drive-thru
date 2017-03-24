import {ORDER_ITEM_STATE_OPEN} from '../actions/order_item';
import React from 'react';

function shouldDisableSaveButton(order) {
    return order.orderItems.reduce((prior, orderItem) => {
        return prior && (orderItem.state !== ORDER_ITEM_STATE_OPEN);
    }, true);
}

export default function EditOrderActions({ order, onOrderCancelClick, onOrderSaveClick }) {
    return (
        <div className='sty_edit_order_actions wd_edit_order_actions bordered'>
            <button
                className='wd_cancel'
                onClick={() => { onOrderCancelClick(order.id, order.state); }}
            >Cancel</button>
            <button
                className='wd_save'
                onClick={() => { onOrderSaveClick(order.id, order.state); }}
                disabled={ shouldDisableSaveButton(order) }
            >Save</button>
        </div>
    );
}
