import React from 'react';
import MenuItemButton from './menu_item_button';

function mapToChildren({ menuItems, onMenuItemClick, orderId }) {
    return menuItems.map((menuItem) => {
        return <MenuItemButton
            onClick={ () => { onMenuItemClick(menuItem.id, orderId); }}
            shorthand={ menuItem.shorthand }
        />;
    });
}

export default function MenuItems(props) {
    return (
        <div
            className='sty_menu_items wd_menu_items'
            children={ mapToChildren(props) }
        ></div>
    );
}
