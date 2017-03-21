import React from 'react';

export default function EditOrderActions({ orderId, onOrderCancelClick, onOrderSaveClick }) {
    return (
        <div className='sty_edit_order_actions wd_edit_order_actions'>
            <button
                className='wd_cancel'
                onClick={() => { onOrderCancelClick(orderId); }}
            >Cancel</button>
            <button
                className='wd_save'
                onClick={() => { onOrderSaveClick(orderId); }}
            >Save</button>
        </div>
    );
}
