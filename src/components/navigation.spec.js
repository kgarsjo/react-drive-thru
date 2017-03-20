import {shallow} from 'enzyme';
import React from 'react';
import Navigation from './navigation';

describe('components/navigation', function () {
    var component;
    beforeEach(function () {
        component = shallow(<Navigation/>);
    });

    it('should have correct encapsulating class names', function () {
        expect(component.hasClass('sty_navigation')).toEqual(true);
        expect(component.hasClass('wd_navigation')).toEqual(true);
    });

    it('should have 3 navigable links', function () {
        var matching = component.find('a');
        expect(matching.length).toEqual(3);
    });

    it('should have expected navigable link text', function () {
        var linkTexts = component.find('a').reduce((prior, matched) => {
            prior.push(matched.text());
            return prior;
        }, []);
        expect(linkTexts).toEqual([
            'Take An Order',
            'View Open Orders',
            'View Fulfilled Orders',
        ]);
    });
});
