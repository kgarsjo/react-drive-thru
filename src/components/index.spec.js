import {shallow} from 'enzyme';
import React from 'react';
import Index from './index';

describe('components/index', function () {
    var component;
    beforeEach(function () {
        component = shallow(<Index/>);
    });

    it('should have correct title', function () {
        expect(component.find('title').text()).toEqual('React Drive-Thru');
    });

    it('should have a stylesheet link', function () {
        var link = component.find('link');
        expect(link.length).toEqual(1);
        expect(link.prop('rel')).toEqual('stylesheet');
        expect(link.prop('href')).toEqual('/styles/styles.css');
    });

    it('should have a main element just inside the body', function () {
        var main = component.find('body #main');
        expect(main.length).toEqual(1);
    });

    describe('when passing true production value', function () {
        beforeEach(function () {
            component = shallow(<Index production={true}/>);
        });
        it('should import a minified app script', function () {
            var script = component.find('script');
            expect(script.length).toEqual(1);
            expect(script.prop('src')).toEqual('/js/app.min.js');
        });
    });

    describe('when passing false production value', function () {
        beforeEach(function () {
            component = shallow(<Index production={false}/>);
        });
        it('should import a non-minified app script', function () {
            var script = component.find('script');
            expect(script.length).toEqual(1);
            expect(script.prop('src')).toEqual('/js/app.js');
        });
    });
});
