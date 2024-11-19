const Array = require('./Array');

let numbers = new Array();

numbers.push(3);
numbers.push(4);
numbers.push(6);
numbers.pop();
numbers.pop();
numbers.unshift(2);
numbers.unshift(10);
numbers.unshift(11);

// console.log(numbers.print());

// numbers.forEach(data => {
//     console.log(data);
// });

console.log(numbers.map(number => number ** 2));