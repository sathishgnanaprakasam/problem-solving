// Strings in JS
// let word = `apple is a fruit.
// apple a day keeps doctor away`;
// let word = "apple";
// let word = `apple`;
// let word = new String('apple');

// console.log(word, typeof word);

// let word = 'apple';

// console.log(word[4]);
// string traversals
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }

// let i = 0;
// while (i < word.length) {
//     console.log(word[i]);
//     i++;
// }

// let i = 0;
// for (; i < word.length;) {
//     console.log(word[i]);
//     i++;
// }

// let i = 0;
// do {
//     console.log(word[i]);
//     i++;
// } while (i < word.length);

// for...in
// for (let i in word) {
//     console.log(word[i]);
// }

// for (let char of word) {
//     console.log(char);
// }

// ---------------------

// function recur(word) {
//     if (word === '') return;

//     recur(word.slice(1,));
//     console.log(word[0]);
// }

// recur('apple');

// ---------------------

// Arrays are mutables or changeables
// Strings are immutables or unchangeables
// let numbers = [3, 4, 5, 6];

// // change or update the first element to 13
// numbers[0] = 13;

// console.log(numbers);

// Strings are immutables.
// let word = 'apple';

// // change the second character of the word to 'k'
// let index = 4;
// let char = 'm';
// word = word.slice(0, index) + char + word.slice(index + 1,);

// console.log(word);

// let word = 'apple';

// let index = 1;
// let char = 'm';

// word = word.split('').map((ch, idx) => index === idx ? char : ch).join('');

// console.log(word);


// -------------------------------

// let lowercase = 'abcdefghijklmnopqrstuvwxyz';
// let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let digits = '0123456789';

// console.log(lowercase.charCodeAt(0));
// console.log(String.fromCharCode(98));

// for (let i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i));
// }

// for (let i = 65; i <= 90; i++) {
//     console.log(String.fromCharCode(i));
// }

// for (let i = 48; i <= 57; i++) {
//     console.log(String.fromCharCode(i));
// }

// function toUpperCase(char) {
//     return String.fromCharCode(char.charCodeAt(0) - 32)
// }

// function toLowerCase(char) {
//     return String.fromCharCode(char.charCodeAt(0) + 32)
// }

// let char = 'a';

// console.log(char.toUpperCase());

// console.log(toUpperCase(char));

// for (let char of uppercase) {
//     console.log(toLowerCase(char));
// }

// -----------------------------------

