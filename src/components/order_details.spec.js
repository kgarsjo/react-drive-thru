import {shallow} from 'enzyme';
import React from 'react';
import OrderDetails from './order_details';

describe('components/order_details', function () {
    var component;
    var id;
    var price;
    var state;

    beforeEach(function () {
        id = 1111;
        price = 3025;
        state = 'Fulfilled';
        component = shallow(<OrderDetails
            id={id}
            price={price}
            state={state}
        />);
    });

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('sty_order_details')).toEqual(true);
        expect(component.hasClass('wd_order_details')).toEqual(true);
    });

    it('should display the correct id', function () {
        expect(component.find('.wd_id').text()).toEqual('' + id);
    });

    it('should display the correct price', function () {
        expect(component.find('.wd_price').text()).toEqual('$30.25');
    });

    it('should display the correct state', function () {
        expect(component.find('.wd_state').text()).toEqual('Fulfilled');
    });
});
