// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

// function isVowel(char) {
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }

inp.on("close", () => {

    console.log(userInput[0].split('').filter(char => 'aeiou'.includes(char)).map(char => char.charCodeAt(0)).reduce((p, c) => p + c) % 8 === 0 ? 1 : 0);
});