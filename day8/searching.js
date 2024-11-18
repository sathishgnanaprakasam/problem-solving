// Time complexity: O(n)
// function linearSearch(numbers, key) {
//     // traverse the numbers
//     for (let i = 0; i < numbers.length; i++) {
//         // check if we can find any of the matches
//         if (numbers[i] === key) return true;
//     }
//     return false;
// }

// console.log(linearSearch([3, 4, 5, 7, 2, 1, 6], 1));

// -----------------------------------------------------
// Time Complexity: O(logN)
// function binarySearch(numbers, key) {
//     // sort the given array
//     numbers.sort((a, b) => a - b);

//     // place two pointers in the array
//     let l = 0;
//     let r = numbers.length - 1;

//     while (l <= r) {
//         // find the middle index
//         let m = Math.floor((l + r) / 2);

//         // compare if the element at the m index is equal to the key
//         if (numbers[m] === key) {
//             // if they match, then the element exists in the array
//             return true;
//         } else {
//             // either the key is greater than numbers[m] or less than numbers[m]
//             if (key < numbers[m]) {
//                 // update the r index
//                 r = m - 1;
//             } else {
//                 // the key is greater than the value at m index
//                 l = m + 1;
//             }
//         }
//     }

//     return false;
// }

// -------------------

function ternarySearch(numbers, key) {
    // place the two pointers
    let l = 0, r = numbers.length - 1;

    while (l <= r) {
        // calculate the middle indexes
        let m1 = l + Math.floor((r - l) / 3);
        let m2 = r - Math.floor((r - l) / 3);

        if (numbers[m1] === key || numbers[m2] === key) {
            return true;
        } else if (key < numbers[m1]) {
            // update the r
            r = m1 - 1;
        } else if (key > numbers[m2]) {
            l = m2 + 1;
        } else {
            l = m1 + 1;
            r = m2 - 1;
        }
    }

    return false;
}


console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 13));