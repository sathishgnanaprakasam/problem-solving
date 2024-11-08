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
    // handle the input from userInput
    const n = Number(userInput[0]);

    // print for n lines or rows
    // for (let row = 1; row <= n; row++) {
    //     // create an array to hold the stars for each line
    //     let line = [];

    //     // print a line of stars
    //     // print n stars in the first line and n-1 in the next and n-2 in the next...
    //     // print n-row+1 number of stars
    //     for (let star = 1; star <= n - row + 1; star++) {
    //         line.push('*');
    //     }
    //     // adding a new line to the output
    //     console.log(line.join('  '));
    // }

    let line = new Array(n).fill('*');

    for (let row = 1; row <= n; row++) {
        console.log(line.join('  '));

        // remove a star from the line
        line.pop();
    }
});