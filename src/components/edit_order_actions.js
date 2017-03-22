import React from 'react';

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
            >Save</button>
        </div>
    );
}
