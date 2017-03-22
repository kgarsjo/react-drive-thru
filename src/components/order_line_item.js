import {centsToDollars} from './utils/formatting';
import React from 'react';

function getClassname(id) {
    return [
        'sty_order_line_item',
        'wd_order_line_item_' + id,
    ].join(' ');
}

export default function OrderLineItem(props) {
    return (
        <tr className={ getClassname(props.id) }>
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
