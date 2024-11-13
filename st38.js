// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r]) return false;

        l++, r--;
    }

    return true;
}

function isAnagrams(s1, s2) {
    if (s1.split('').sort().join('') === s2.split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}

inp.on("close", () => {
    const [s1, s2] = userInput[0].split(' ');

    if (isPalindrome(s1) && isPalindrome(s2) && isAnagrams(s1, s2)) {
        console.log(1);
    } else {
        console.log(0);
    }
});