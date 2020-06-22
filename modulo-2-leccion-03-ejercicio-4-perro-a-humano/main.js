'use strict';

let dogAge = 4;

if (dogAge === 1) {
    console.log(`This dog has 15 human years.`);
} else if (dogAge === 2) {
    console.log(`This dog has ${15 + 9} human years.`);
} else {
    console.log(`This dog has ${15 + 9 + dogAge * 5} human years.`);
}
