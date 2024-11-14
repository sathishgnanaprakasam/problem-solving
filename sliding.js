// // time complexity: O(N^3)

// function isPalindrome(word) {
//     let l = 0;
//     let r = word.length - 1;

//     while (l < r) {
//         if (word[l] !== word[r]) return false;
//         l++, r--;
//     }

//     return true;
// }

// function findLongest(word) {
//     let maxLength = 0;
//     let palindrome = '';
//     for (let i = 0; i < word.length; i++) {
//         for (let j = i; j < word.length; j++) {
//             // console.log(word.slice(i, j + 1));
//             let sub = word.slice(i, j + 1);
//             // check if each of the substrings are palindrome
//             if (isPalindrome(sub)) {
//                 if (sub.length > maxLength) {
//                     maxLength = sub.length;
//                     palindrome = sub;
//                 }
//             }
//         }
//     }

//     return palindrome;
// }

// console.log(findLongest("babad"));
// // console.log(findLongest("cbbd"));
// // console.log(findLongest("aabbaaababbaba"));

// -----------------------------------------
// function expandFromCenter(word, start, end) {
//     let palindrome = '';
//     while (start >= 0 && end < word.length && word[start] === word[end]) {
//         palindrome = word.slice(start, end + 1);
//         start--;
//         end++;
//     }
//     return palindrome;
// }

// // time complexity: O(N^2 logn)
// function findLongest(word) {
//     let maxLength = 0;
//     let maxLengthWord = '';

//     // traverse the word
//     for (let i = 0; i < word.length; i++) {
//         let oddWord = expandFromCenter(word, i, i);
//         let evenWord = '';

//         if (i + 1 < word.length) {
//             evenWord = expandFromCenter(word, i, i + 1);
//         }

//         if (oddWord.length > maxLength) {
//             maxLength = oddWord.length;
//             maxLengthWord = oddWord;
//         } else if (evenWord.length > maxLength) {
//             maxLength = evenWord.length;
//             maxLengthWord = evenWord;
//         }
//     }

//     return maxLengthWord;
// }

// console.log(findLongest("babad"));
// console.log(findLongest("cbbd"));
// console.log(findLongest("aabbaaababbaba"));

// ------------------------------------------------

/*
    Question: Given a string s and an integer k, find the maximum number of vowels in any substring of s with length k.

    Input: 

    s = "abciiidef", k = 3

    Output: 3

    Explanation: The substring "iii" contains 3 vowels.

    Input:

    s = "aeiou", k = 2

    Output: 2

    Explanation: Any substring of length 2 contains 2 vowels.

    Input:

    s = "leetcode", k = 3

    Output: 2
*/
// time complexity: O(N^2)
// function countVowels(word) {
//     let vowels = 0;
//     for (let char of word) {
//         if ('aeiou'.includes(char)) vowels++;
//     }
//     return vowels;
// }

// function findMaxVowels(s, k) {
//     let vowelsList = [];
//     for (let i = 0; i + k <= s.length; i++) {
//         let vowels = countVowels(s.slice(i, i + k));
//         vowelsList.push(vowels);
//     }
//     return Math.max(...vowelsList);
// }

// console.log(findMaxVowels('abciiidef', 3));
// console.log(findMaxVowels('aeiou', 2));
// console.log(findMaxVowels('leetcode', 3));

// ---------------------------------------
// time complexity: O(N)
function findMaxVowels(s, k) {
    let vowels = 0;
    // find the total number of vowels for the first window
    for (let i = 0; i < k; i++) {
        if ('aeiou'.includes(s[i])) vowels++;
    }

    let maxVowels = vowels;

    // traverse from k to end of the string
    for (let i = k; i < s.length; i++) {
        // remove the first character in the window
        if ('aeiou'.includes(s[i - k])) {
            vowels--;
        }

        // add the next character to the window
        if ('aeiou'.includes(s[i])) {
            vowels++;
        }

        // keep track of the maximum vowels for every window
        maxVowels = vowels > maxVowels ? vowels : maxVowels;
    }

    return maxVowels;
}

console.log(findMaxVowels('abciiidef', 3));
console.log(findMaxVowels('aeiou', 2));
console.log(findMaxVowels('leetcode', 3));