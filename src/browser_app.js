import App from './containers/app';
import {addOrder} from './actions/order';
import {editOrder} from './actions/activity';
import {getId} from './utils/id';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';
import store from './stores/store';

var newOrderId = getId();
store.dispatch(addOrder(newOrderId));
store.dispatch(editOrder(newOrderId));

store.subscribe(() => {
    console.log(store.getState());
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('main')
);
