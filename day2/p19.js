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
    let bees = Math.floor(n / 2);
    let stars = 1;

    for (let row = 1; row <= bees + 1; row++, stars += 2) {
        let line = [];
        for (let col = 1; col <= bees - row + 1; col++) {
            line.push('b');
        }

        // print the stars
        for (let star = 1; star <= stars; star++) {
            line.push('*');
        }

        for (let col = 1; col <= bees - row + 1; col++) {
            line.push('b');
        }

        console.log(line.join(''));
    }

    stars -= 2;
    stars -= 2;

    for (let row = 1; row <= bees; row++, stars -= 2) {
        let line = [];
        for (let col = 1; col <= row; col++) {
            line.push('b');
        }

        // print the stars
        for (let star = 1; star <= stars; star++) {
            line.push('*');
        }

        for (let col = 1; col <= row; col++) {
            line.push('b');
        }

        console.log(line.join(''));
    }
});