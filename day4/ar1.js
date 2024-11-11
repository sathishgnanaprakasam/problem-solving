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

    let numbers = userInput[1].split(' ').map(val => Number(val));

    let frequencies = {};

    for (let i = 0; i < n; i++) {
        frequencies[numbers[i]] = 0;
    }

    for (let i = 0; i < n; i++) {
        frequencies[numbers[i]]++;
    }

    frequencies = Object.entries(frequencies);

    frequencies.sort((a, b) => a[0] - b[0]);
    frequencies.sort((a, b) => a[1] - b[1]);

    console.log(frequencies.map(sub => sub[0]).join(' '));
});