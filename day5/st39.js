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
    console.log(userInput[0].split(' ').map((word, index) => {
        if (index % 2 == 0) {
            return word.toUpperCase();
        } else {
            return word.toLowerCase();
        }
    }).join(' '));
});