import {centsToDollars} from './utils/formatting';
import {ORDER_ITEM_STATE_FULFILLED} from '../actions/order_item';
import React from 'react';

function getClassname({ id, state}) {
    var classes = [
        'sty_order_line_item',
        'wd_order_line_item_' + id,
    ];
    if (state === ORDER_ITEM_STATE_FULFILLED) {
        classes.push('fulfilled');
    }
    return classes.join(' ');
}

export default function OrderLineItem(props) {
    return (
        <tr className={ getClassname(props) }>
            <td className='wd_name'>{ props.name }</td>
            <td className='wd_price'>{ centsToDollars(props.price) }</td>
            <td>
                <button
                    className='delete_column_content wd_delete'
                    onClick={ props.onDelete }
                >X</button>
            </td>
        </tr>
    );
}
