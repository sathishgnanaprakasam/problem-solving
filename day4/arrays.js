// // Hashing Technique
// let numbers = [4, 5, 2, 2, 4, 5, 6, 7, 5, 4, 3, 2, 1];

// let frequencies = {};

// // iterate the array
// for (let number of numbers) {
//     // for each number from the array numbers,
//     // create an entry of the number into the frequencies object
//     frequencies[number] = 0;
// }

// // iterate the array
// for (let number of numbers) {
//     // for each number from the array numbers,
//     // create an entry of the number into the frequencies object
//     frequencies[number]++;
// }

// console.log(frequencies);

// -----------------------------------------------

/*
    Problem: Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

    // [0, 1, 2, 3]
    Input: [3, 0, 1]
    Output: 2

    // [0, 1, 2]
    Input: [0, 1]
    Output: 2

    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Input: [9, 6, 4, 2, 3, 5, 7, 0, 1]
    Output: 8
*/
// function findMissingNumber(numbers) {
//     availables = {}

//     // iterate the numbers array
//     for (let i = 0; i < numbers.length; i++) {
//         // create an entry into the availables
//         availables[numbers[i]] = true
//     }

//     let n = numbers.length;

//     // iterate through the numbers from 0 to n
//     for (let i = 0; i <= n; i++) {
//         // check if any of these numbers from the range
//         // does not exist in the availables,
//         // then that is the element that we are looking for
//         // if (!Object.keys(availables).includes(String(i))) {
//         //     return i;
//         // }

//         if (!(i in availables)) {
//             return i;
//         }
//     }
// }

// console.log(findMissingNumber([3, 0, 1])) // 2
// console.log(findMissingNumber([0, 1])) // 2
// console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8

// -------------------------------------

/*
    Problem: Given two strings, s and t, return true if t is an anagram of s, and false otherwise.

    Input: s = "anagram", t = "nagaram"
    Output: true

    Input: s = "rat", t = "car"
    Output: false

    Input: s = "a", t = "ab"
    Output: false
*/

// function isAnagram(s, t) {
//     let frequencies = {};

//     for (let i = 0; i < s.length; i++) {
//         frequencies[s[i]] = 0;
//     }

//     for (let i = 0; i < s.length; i++) {
//         frequencies[s[i]]++;
//     }

//     for (let i = 0; i < t.length; i++) {
//         // check if the character is not in frequencies
//         if (!(t[i] in frequencies)) {
//             return false;
//         }

//         // check if the character is in frequencies
//         if (t[i] in frequencies && frequencies[t[i]] === 0) {
//             return false;
//         } else {
//             // reduce the number of occurences
//             frequencies[t[i]]--;
//         }
//     }

//     // check if the frequencies still has some values left
//     for (let key in frequencies) {
//         if (frequencies[key] > 0) {
//             return false;
//         }
//     }

//     // in all other cases
//     return true;

// }

// console.log(isAnagram("anagram", "nagaram"))
// console.log(isAnagram("rat", "car"))
// console.log(isAnagram("a", "ab")) 

// Two Pointers Technique
/*
    Problem: Given an array, reverse the array.

    Input: [2, 5, 3, 4, 1]
    Output: [1, 4, 3, 5, 2]

    Input: [4, 7, 5]
    Output: [5, 7, 4]
*/
// function reverse(numbers) {
//     // create two pointers
//     let left = 0;
//     let right = numbers.length - 1;

//     while (left < right) {
//         // swap or exchange the values in left & right indices
//         let temp = numbers[left];
//         numbers[left] = numbers[right];
//         numbers[right] = temp;

//         // update the pointers
//         left++;
//         right--;
//     }

//     return numbers;
// }


// console.log(reverse([2, 5, 3, 4, 1]))
// console.log(reverse([4, 7, 5]))
/*
    Problem: Given a string, check whether a string is a palindrome or not.

    Input: madam
    Output: Palindrome

    Input: target
    Output: Not a Palindrome

    Input: malayalam
    Output: Palindrome

    Input: radar
    Output: Palindrome
*/

// Two pointers technique
// function isPalindrome(word) {
//     // place two pointers
//     let left = 0;
//     let right = word.length - 1;

//     while (left <= right) {
//         if (word[left] !== word[right]) {
//             return 'Not Palindrome';
//         }
//         left++;
//         right--;
//     }

//     return 'Palindrome';
// }

// recursion

// console.log(isPalindrome("madam"))
// console.log(isPalindrome("target"))
// console.log(isPalindrome("malayalam"))
// console.log(isPalindrome("radar"))

// Recursion: A function calls itself.
// function sayHello(times) {
//     if (times === 0) return;

//     console.log('hello');
//     sayHello(times - 1);
// }

// sayHello(3);

// Recursion: To reverse the array
// function reverse(numbers, start = 0) {
//     if (start === numbers.length) return;

//     console.log(numbers[start]);
//     reverse(numbers, start + 1);
//     console.log(numbers[start]);
// }

// let numbers = [3, 6, 4, 2, 1];

// reverse(numbers);

// Using recursion
function isPalindrome(word, i = 0) {

}


// console.log(isPalindrome("target"))
// console.log(isPalindrome("malayalam"))
// console.log(isPalindrome("radar"))

/*
    Problem: Given an array and a target, find the pair of elements and return their indices that adds up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Input: [2, 7, 11, 15], target = 9
    Output: [0, 1]

    Input: [3, 2, 4], target = 6
    Output: [1, 2]

    Input: [3, 3], target = 6
    Output: [0, 1]
*/

/*
    Problem: Given two sorted arrays, merge the arrays into a single array.

    Input: [1, 2, 3], [2, 5, 6]
    Output: [1, 2, 2, 3, 5, 6]

    Input: [1, 3, 5], [2, 4, 6]
    Output: [1, 2, 3, 4, 5, 6]
*/
