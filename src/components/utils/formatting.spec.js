import {centsToDollars} from './formatting';

describe('components/utils/formatting', function () {
    describe('when calling centsToDollars', function () {
        it('should return $0.00 with no param', function () {
            expect(centsToDollars()).toEqual('$0.00');
        });

        it('should return $12.34 with 1234', function () {
            expect(centsToDollars(1234)).toEqual('$12.34');
        });
    });
});
