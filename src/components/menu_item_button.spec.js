import {shallow} from 'enzyme';
import React from 'react';
import MenuItemButton from './menu_item_button';

describe('./components/menu_item_button', function () {
    var onClick = jest.fn();
    var shorthand = 'foo';
    var component;
    beforeEach(function () {
        component = shallow(<MenuItemButton
            onClick={onClick}
            shorthand={shorthand}
        />);
    });

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('sty_menu_item_button')).toEqual(true);
        expect(component.hasClass('wd_menu_item_button_' + shorthand)).toEqual(true);
    });

    describe('when clicking button', function () {
        it('should call the onClick fn', function () {
            component.find('button').simulate('click');
            expect(onClick).toBeCalled();
        });
    });
});
