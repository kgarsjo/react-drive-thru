import React from 'react';

function getClassname(shorthand) {
    return [
        'sty_menu_item_button',
        'wd_menu_item_button_' + shorthand,
    ].join(' ');
}

export default function MenuItemButton({ shorthand, onClick }) {
    return (
        <button
            className={ getClassname(shorthand) }
            onClick={onClick}
        >
            {shorthand}
        </button>
    );
}
