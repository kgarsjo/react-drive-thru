import numeral from 'numeral';

export function centsToDollars(cents = 0) {
    return numeral(cents / 100).format('$0,0.00');
}
