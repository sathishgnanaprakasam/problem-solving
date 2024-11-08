const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

function findFactors(number) {
    let factors = [];

    // Note: The number itself should not be considered as one of the divisors.
    for (let divisor = 1; divisor <= number - 1; divisor++) {
        // check if the number is even divisible by the divisor
        if (number % divisor === 0) factors.push(divisor);
    }

    return factors;
}


// Time Complexity: O(n)
rl.on('close', () => {
    // 1. Take two numbers as input<- number1, number2
    let number1 = Number(userInput[0]);
    let number2 = Number(userInput[1]);

    // 2. Find the factors of the first number < - factors1
    let factors1 = findFactors(number1);

    // 3. Find the factors of the second number < - factors2
    let factors2 = findFactors(number2);

    // 4. Find the sum of the factors of the first number < - sum1
    let sum1 = factors1.reduce((p, c) => p + c);

    // 5. Find the sum of the divisors of the second number < - sum2
    let sum2 = factors2.reduce((p, c) => p + c);

    // 6. If sum1 is equal to number2 and sum2 is equal to number1, then the numbers are amicable numbers
    if (sum1 === number2 && sum2 === number1) {
        console.log('Amicable Numbers');
    } else {
        // 7. Else, the numbers are not amicable numbers
        console.log('Not Amicable Numbers');
    }
});
