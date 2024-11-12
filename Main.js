// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

function recur(word) {
    if (word === '') return '';
    return recur(word.slice(1,)) + word.charAt(0);
}

/*
    'refynnej'
*/

inp.on("close", () => {
    let word = userInput[0];

    // console.log(word.split('').reverse().map((char, idx) => idx === 0 ? char.toUpperCase() : char).join(''));

    // let result = word.charAt(word.length - 1).toUpperCase();
    // for (let i = word.length - 2; word.length > 1 && i >= 0; i--) {
    //     result += word.charAt(i);
    // }
    // console.log(result);
    let reversed = recur(word);
    console.log(reversed[0].toUpperCase() + reversed.slice(1,));
});