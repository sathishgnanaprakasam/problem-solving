// Time complexity: O(n)
function linearSearch(numbers, key) {
    // traverse the numbers
    for (let i = 0; i < numbers.length; i++) {
        // check if we can find any of the matches
        if (numbers[i] === key) return true;
    }
    return false;
}

console.log(linearSearch([3, 4, 5, 7, 2, 1, 6], 1));