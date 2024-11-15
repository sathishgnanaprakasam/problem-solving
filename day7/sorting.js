// Bubble Sort
// let numbers = [4, 2, 3, 1, 6, 7, 5];
// let pass = 0;
// let swaps;

// for (let j = 0; j < numbers.length - 1; j++) {
//     pass++;
//     swaps = 0;
//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (numbers[i] > numbers[i + 1]) {
//             // swap the elements
//             let temp = numbers[i];
//             numbers[i] = numbers[i + 1];
//             numbers[i + 1] = temp;
//             swaps++;
//         }
//     }
//     if (swaps === 0) break;
// }

// console.log(numbers.join(' '));

// --------------------------------

// function findKthLargest(numbers, k) {
//     for (let j = 0; j < k; j++) {
//         for (let i = 0; i < numbers.length - 1; i++) {
//             if (numbers[i] > numbers[i + 1]) {
//                 // swap the elements
//                 let temp = numbers[i];
//                 numbers[i] = numbers[i + 1];
//                 numbers[i + 1] = temp;
//             }
//         }
//     }
//     return numbers[numbers.length - k];
// }

// let numbers = [4, 2, 3, 1, 6, 7, 5];

// console.log(findKthLargest(numbers, 2));
// console.log(findKthLargest(numbers, 3));
// console.log(findKthLargest(numbers, 1));
// time complexity: O(N^2)

// ---------------------------------------------

// Selection Sort
// function findIndex(numbers, start, end) {
//     let minIndex = start;
//     let min = numbers[start];
//     for (let i = start; i <= end; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i];
//             minIndex = i;
//         }
//     }
//     return minIndex;
// }


// function selectionSort(numbers) {
//     for (let i = 0; i < numbers.length - 1; i++) {
//         let sIndex = findIndex(numbers, i, numbers.length - 1);

//         // do a swap
//         let temp = numbers[i];
//         numbers[i] = numbers[sIndex];
//         numbers[sIndex] = temp;
//     }

//     return numbers;
// }

// console.log(selectionSort([4, 2, 3, 1, 6, 7, 5]).join(' '));

// ---------------------------------------------------
// function insertionSort(numbers) {
//     // iterate the numbers array
//     for (let i = 0; i < numbers.length; i++) {
//         let box = i;
//         let temp = numbers[i];

//         for (let j = i - 1; j >= 0; j--) {
//             if (temp < numbers[j]) {
//                 numbers[j + 1] = numbers[j];
//                 box = j;
//             }
//         }

//         numbers[box] = temp;
//     }
// }

// let numbers = [3, 6, 2, 7, 5, 4, 1];

// insertionSort(numbers);

// console.log(numbers.join(' '));

// -------------------------------

/*
    Given two sorted arrays, merge the two arrays into a single sorted arrays.

    Input:

    [1, 3, 5, 7, 9]
    [2, 4, 6, 8, 10]

    Output:

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
// function findIndex(number, nums) {
//     // traverse the array nums
//     for (let i = 0; i < nums.length; i++) {
//         if (number < nums[i]) {
//             return i;
//         }
//     }

//     return nums.length;
// }


// let nums1 = [1, 3, 5, 7, 9];
// let nums2 = [2, 4, 6, 8, 10];

// // console.log([...nums1, ...nums2].sort((a, b) => a - b));

// // Consider or assume that the second array nums2 as unsorted array
// // traverse all the elements in nums2
// nums2.forEach(number => {
//     // for each of the number from nums2 array
//     // find exact index of where we can insert this number
//     let index = findIndex(number, nums1);

//     // insert the number at the index
//     nums1.splice(index, 0, number);
// });

// // nums1 will now have a merged array that is sorted
// console.log(nums1);


// --------------------------------------------
function countingSort(numbers) {
    let hashes = {};

    numbers.forEach(number => number in hashes ? hashes[number]++ : hashes[number] = 1);

    console.log(Object.entries(hashes).map(sub => {
        let result = [];
        let times = sub[1];
        while (times--) {
            result.push(sub[0]);
        }
        return result;
    }).map(sub => sub.join(' ')).join(' '));
}

let numbers = [3, 6, 2, 7, 5, 4, 1, 1, 1, 2, 3, 1, 2, 4, 5, 6, 7, 8, 5, 4, 3, 2, 1,];

countingSort(numbers);