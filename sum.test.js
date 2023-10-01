const test = require('ava');
const {add} = require('./sum.js');


test('sum', t => {
    console.log('It should pass');
    t.is(add(1, 2), 3);
})

test('incorrect sum', t => {
    console.log('It should fail');
    t.is(add(1, 2), 4);
})