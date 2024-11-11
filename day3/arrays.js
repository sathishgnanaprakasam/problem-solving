// function compareFn(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// function compareFn(a, b) {
//     return a - b;
// }

// let compareFn = function (a, b) {
//     return a - b;
// }

// let compareFn = (a, b) => {
//     return a - b;
// }

// let numbers = [5, 2, 1, 4, 3, 6, 11, 10, 22, 56];

// // arrange the elements in ascending order or increasing order
// // numbers.sort((a, b) => a - b);

// // arrange the elements in descending order or decreasing order
// // numbers.sort((a, b) => b - a);

// console.log(numbers);

// -----------------------------------------
// let words = ['app', 'ankle', 'agenda', 'apple', 'application', 'and', 'android', 'banana', 'lemon', 'watermelon', 'pomegranate', 'orange', 'cherry'];

// words.sort();

// console.log(words);

// -----------------------------------------

// let word = 'javascript';

// console.log(word.split('').sort().join(''));

// -----------------------------------------

// let words = ['app', 'ankle', 'agenda', 'apple', 'application', 'and', 'android', 'banana', 'lemon', 'watermelon', 'pomegranate', 'orange', 'cherry'];

// // question: to find the longest word in the array

// // console.log(words.map(word => [word, word.length]).reduce((p, c) => p[1] > c[1] ? p : c)[0]);

// // create an array with the lengths of each word
// let lengths = [];

// for (let i = 0; i < words.length; i++) {
//     lengths.push([words[i], words[i].length]);
// }

// // assume the longest word as the first word in the sequence
// // let longestWord = lengths[0][0];
// // let longestLength = lengths[0][1];

// // // iterate the words array for the rest of the words
// // for (let i = 1; i < lengths.length; i++) {
// //     if (lengths[i][1] >= longestLength) {
// //         longestLength = lengths[i][1];
// //         longestWord = lengths[i][0];
// //     }
// // }

// // console.log(longestWord);

// // Method2: sort the lengths array using the lengths

// lengths.sort((a, b) => b[1] - a[1]);

// console.log(lengths[0][0]);

// ----------------------------------------

/*
    Question: Given an array, remove the duplicates from the array.

    Example:

    Input: [4, 5, 2, 5, 6, 4, 2, 3, 5, 6]
    Output: [2, 3, 4, 5, 6]
*/

// let numbers = [4, 5, 2, 5, 6, 4, 2, 3, 5, 6];

// // create an array to store the unique elements
// let uniques = [];

// // iterate the numbers array
// for (let number of numbers) {
//     // for each number
//     // check if the number does not exist in the uniques array
//     if (!uniques.includes(number)) {
//         // create an entry into the uniques
//         uniques.push(number);
//     }
// }

// console.log(uniques);

// -----------------------------------

// let numbers = [4, 5, 2, 5, 6, 4, 2, 3, 5, 6];

// console.log(numbers.reduce((p, c) => {
//     if (!p.includes(c)) {
//         return [...p, c]
//     } else {
//         return p;
//     }
// }, []));

// -----------------------------------

// Question: To remove the duplicates

// let numbers = [4, 5, 2, 5, 6, 4, 2, 3, 5, 6];

// //  HASHING TECHNIQUE
// // create an empty object
// let frequencies = {};

// // iterate the numbers array and create an entry for each of the element into frequencies
// for (let index in numbers) {
//     frequencies[numbers[index]] = 0;
// }

// for (let index in numbers) {
//     frequencies[numbers[index]]++;
// }

// // console.log(Object.keys(frequencies).map(number => parseInt(number)));

// console.log(frequencies);

// -------------------------------------------------

let numbers = [5, 2, 8, 4, 3, 2, 2, 5, 6, 1, 7, 4, 3, 2, 7, 8];

let frequencies = {};

for (let i = 0; i < numbers.length; i++) {
    frequencies[numbers[i]] = 0;
}

for (let i = 0; i < numbers.length; i++) {
    frequencies[numbers[i]]++;
}

console.log(frequencies);