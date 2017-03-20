import App from './components/app';
import React from 'react';
import {render} from 'react-dom';
import store from './store';

console.log(store.getState());

render(<App/>, document.getElementById('main'));
