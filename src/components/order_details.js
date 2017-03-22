import {centsToDollars} from './utils/formatting';
import React from 'react';

export default function OrderDetails({ id, price, state, summary}) {
    return (
        <table className='sty_order_details wd_order_details'>
            <thead>
                <tr>
                    <th>Order #:</th>
                    <th>State:</th>
                    <th>Price:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='wd_id'>{ id }</td>
                    <td className='wd_state'>{ state }</td>
                    <td className='wd_price'>{ centsToDollars(price) }</td>
                </tr>
            </tbody>
        </table>
    );
}
