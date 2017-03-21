import EditOrder from '../containers/edit_order';
import React from 'react';
import Navigation from './navigation';

function getActivity(state, orderId) {
    return <EditOrder/>;
}

export default function App({ state, orderId }) {
    return (
        <div className='wd_app'>
            <Navigation/>
            { getActivity(state, orderId) }
        </div>
    );
}
