import {centsToDollars} from './utils/formatting';
import React from 'react';

export default function OrderDetails({ id, price, state, summary}) {
    return (
        <div className='sty_order_details wd_order_details'>
            <div className='primary_info'>
                <div className='wd_id'>{ id }</div>
                <div className='wd_summary'>{ summary }</div>
            </div>
            <div className='secondary_info'>
                <div className='wd_price'>{ centsToDollars(price) }</div>
                <div className='wd_state'>{ state }</div>
            </div>
        </div>
    );
}
