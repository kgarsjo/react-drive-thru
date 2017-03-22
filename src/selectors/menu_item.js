export function selectMenuItem(state, menuItemId) {
    return state.menu_items[menuItemId];
}

export function selectAllMenuItems(state) {
    return Object.values(state.menu_items);
}
