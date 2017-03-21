import {getId} from './id';

describe('utils/id', function () {
    it('should return and increment the id value when calling getId', function () {
        expect(getId()).toEqual(1000);
        expect(getId()).toEqual(1001);
        expect(getId()).toEqual(1002);
    });
});
