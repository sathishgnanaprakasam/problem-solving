// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let n = Number(userInput[0]);

    for (let row = 1; row <= n - 1; row++) {
        // for each line
        let line = [];

        // add n-row number of spaces
        for (let space = 1; space <= n - row; space++) {
            line.push(' ');
        }

        line.push('*');

        console.log(line.join(''));
    }

    let line = [];

    for (let star = 1; star <= n; star++) {
        line.push('*');
    }

    console.log(line.join(''));

    for (let row = 1; row <= n - 1; row++) {
        // spaces for row number of times
        let line = [];

        for (let space = 1; space <= row; space++) {
            line.push(' ');
        }

        line.push('*');

        console.log(line.join(''));
    }
});