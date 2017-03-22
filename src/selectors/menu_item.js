export function selectMenuItem(state, menuItemId) {
    return state.menu_items[menuItemId];
}

export function selectAllMenuItems(state) {
    return Object.keys(state.menu_items)
        .map((menuItemId) => {
            return state.menuItems[menuItemId];
        });
}
