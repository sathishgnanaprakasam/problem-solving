// function findOnes(numbers) {
//     // initialize a count variable to keep track of the total number of ones
//     let ones = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         // check if there are matches
//         if (numbers[i] === 1) ones++;
//     }

//     return ones;
// }

function findOnes(numbers) {
    // place two pointers
    let l = 0;
    let r = numbers.length - 1;

    if (numbers[r] === 1) {
        // all the numbers are ones
        return r + 1;
    }

    if (numbers[0] === 0) {
        // no ones are there
        return 0;
    }

    while (l <= r) {
        // calculate the middle index
        let m = Math.floor((l + r) / 2);

        // check if the middle index value is the last occurence of the 1
        if (numbers[m] === 1 && numbers[m + 1] === 0) {
            return m - l + 1;
        } else if (numbers[m] === 1 && numbers[m + 1] === 1) {
            // update the left pointer
            l = m + 1;
        } else if (numbers[m] === 0 && numbers[m - 1] === 1) {
            return m - l;
        } else if (numbers[m] === 0 && numbers[m - 1] === 0) {
            r = m - 1;
        }
    }
}

console.log(findOnes([1, 1, 1, 1, 0, 0, 0]));
console.log(findOnes([1, 1, 0, 0, 0]));
console.log(findOnes([1, 1, 1, 1, 1]));
console.log(findOnes([0, 0, 0, 0, 0]));