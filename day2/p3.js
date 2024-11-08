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
    let [rows, cols] = userInput[0].split(' ').map(item => Number(item));

    for (let row = 1; row <= rows; row++) {
        let line = [];

        for (let col = 1; col <= cols; col++) {
            if (row === 1 || row === rows || col === 1 || col === cols) {
                line.push('*');
            } else {
                line.push(' ');
            }
        }

        console.log(line.join(' '));
    }
});