export const ADD_MENU_ITEM = 'actions:menu_item:add';

export function addMenuItem(id, name, shorthand, price) {
    return {
        type: ADD_MENU_ITEM,
        id,
        name,
        shorthand,
        price,
    };
}
