var welcome = require('./greeting');
var assert = require('assert'); // allows easier comparison of tests.

describe('Testing greeting function', function() {

    it('Greeted user', function() {
        var greetTest = welcome('Chuck');
        assert.equal( greetTest, 'Hello Chuck' );
    });

    it('Hello Tim if name not given', function() {
        var greeting = welcome();
        assert.equal( greeting, 'Hello Tim' );
    });
}); 