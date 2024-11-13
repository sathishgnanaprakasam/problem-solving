// time complexity: O(N^3)

function isPalindrome(word) {
    let l = 0;
    let r = word.length - 1;

    while (l < r) {
        if (word[l] !== word[r]) return false;
        l++, r--;
    }

    return true;
}

function findLongest(word) {
    let maxLength = 0;
    let palindrome = '';
    for (let i = 0; i < word.length; i++) {
        for (let j = i; j < word.length; j++) {
            let sub = word.slice(i, j + 1);
            // check if each of the substrings are palindrome
            if (isPalindrome(sub)) {
                if (sub.length > maxLength) {
                    maxLength = sub.length;
                    palindrome = sub;
                }
            }
        }
    }

    return palindrome;
}

console.log(findLongest("babad"));
console.log(findLongest("cbbd"));
console.log(findLongest("aabbaaababbaba"));