
var rl = require('readline');
var prompts = rl.createInterface(process.stdin, process.stdout);

module.exports = {
    greeting: function(userName){
            name = userName || 'Tim';
            return 'Hello ' + name;
        },
    
    makeFarewell: function(userName){
            name = userName || 'Tim';
            return 'Hello ' + name;
        },
    consoleUser: function() { prompts.question('What is your name?', function(nameInput) {
        name = nameInput || 'Tim';
        return 'Hello ' + name;
        process.exit();
        })}

};

module.exports.consoleUser();