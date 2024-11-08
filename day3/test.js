const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Your name? ", (name) => {
    console.log('Hi', name);
    console.log('Thanks for the input!');

    rl.close();
});
