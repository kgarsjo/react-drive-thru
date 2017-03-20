import {shallow} from 'enzyme';
import React from 'react';
import App from './app';
import Navigation from './navigation';

describe('components/app', function () {
    var component;
    beforeEach(function () {
        component = shallow(<App/>);
    });

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('wd_app')).toEqual(true);
    });

    it('should embed the navigation component', function () {
        var navigation = component.find(Navigation);
        expect(navigation.length).toEqual(1);
    });
});
