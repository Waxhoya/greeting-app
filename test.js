var welcome = require('./greeting');
var assert = require('assert'); // allows easier comparison of tests.

describe('Testing greeting function', function() {

    it('Greeted user', function() {
        var greetTest = welcome.greeting('Chuck');
        assert.equal( greetTest, 'Hello Chuck' );
    });

    it('Hello Tim if name not given', function() {
        var greeting = welcome.greeting();
        assert.equal( greeting, 'Hello Tim' );
    });
}); 