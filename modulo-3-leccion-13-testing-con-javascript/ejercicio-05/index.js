function fizzbuzz(number) {
    if (number % 5 === 0) {
        if (number % 3 === 0) {
            return 'fizzbuzz';
        }
        return 'buzz';
    }
    if (number % 3 === 0) {
        return 'fizz';
    }
    return '';
}
module.exports = fizzbuzz;
