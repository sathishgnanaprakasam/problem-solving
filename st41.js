// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

function areConsecutives(word) {
    return word[0] === word[1] && word[1] === word[2];
}

inp.on("close", () => {
    let word = userInput[0];

    let i = 0;
    let chars = 0;

    while (true) {
        let sub = word.slice(i, i + 3);
        if (sub.length < 3) break;

        if (areConsecutives(sub)) {
            chars++;
            i = i + 2;
        } else {
            i = i + 1;
        }
    }

    console.log(chars);
});