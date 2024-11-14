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
function findIndex(numbers, start, end) {
    let minIndex = start;
    let min = numbers[start];
    for (let i = start; i <= end; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
            minIndex = i;
        }
    }
    return minIndex;
}


function selectionSort(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let sIndex = findIndex(numbers, i, numbers.length - 1);

        // do a swap
        let temp = numbers[i];
        numbers[i] = numbers[sIndex];
        numbers[sIndex] = temp;
    }

    return numbers;
}

console.log(selectionSort([4, 2, 3, 1, 6, 7, 5]).join(' '));