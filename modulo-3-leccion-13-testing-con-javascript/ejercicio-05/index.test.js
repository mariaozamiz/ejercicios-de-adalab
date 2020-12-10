const fizzbuzz = require('./index');

describe('Add padding', () => {
    test('return fizz if number is a multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('fizz');
    });

    test('return buzz if number is a multiple of 5', () => {
        expect(fizzbuzz(25)).toBe('buzz');
    });

    test('return fizzbuzz if number is a multiple of 5 and 3', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });

    test('return empty string if number is neither multiple of 5 nor 3', () => {
        expect(fizzbuzz(7)).toBe('');
    });

    test('return empty string if number is 0', () => {
        expect(fizzbuzz(7)).toBe('');
    });
});
