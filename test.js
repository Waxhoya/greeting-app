var welcome = require('./greeting');
var chalk = require('chalk');
var assert = require('assert'); // allows easier comparison of tests.

describe('Testing greeting function', function() {

    it('Greeted user', function() {
        var greetTest = welcome.greeting('Chuck');
        assert.equal( greetTest, chalk.blue.bold('Hello ')+'Chuck' );
    });

    it('Hello Tim if name not given', function() {
        var greeting = welcome.greeting();
        assert.equal(greeting, chalk.blue.bold('Hello ')+'Tim' );
    });

    it('Said Goodbye to named user', function() {
        var byeTest = welcome.makeFarewell('Chuck');
        assert.equal(byeTest, chalk.green('Goodnight ')+'Chuck' );
    });

    it('Said goodbye to anon user', function() {
        var byeTestAnon = welcome.makeFarewell();
        assert.equal(byeTestAnon, chalk.green('Goodnight ')+'Anon' );
    });
}); 