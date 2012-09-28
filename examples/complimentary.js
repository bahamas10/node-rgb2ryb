var rgb2ryb = require('../rgb2ryb'),
    s = [0, 255, 0];

console.log('%s -> %s', s, rgb2ryb.complimentary(s));
