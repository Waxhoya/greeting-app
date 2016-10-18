var chalk = require('chalk');
module.exports = {
    greeting: function(userName){
            name = userName || 'Tim';
            return chalk.blue.bold('Hello ') + name;
        },
    
    makeFarewell: function(userName){
            name = userName || 'Anon';
            return chalk.green('Goodnight ') + name;
        },
};
