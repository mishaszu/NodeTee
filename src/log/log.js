const l = require('l-print');

module.exports = {
    info: l().pipe('blue', 'date', 'log'),
    good: l().pipe('green', 'date', 'log'),
    error: l().pipe('red', 'date', 'log'),
    head: l().pipe('cyan', 'date', 'log'),
    headInfo: l().pipe('yellow', 'date', 'log'),
};
