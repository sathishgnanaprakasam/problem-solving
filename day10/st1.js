// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

function findAdjacent(words) {
    for (let i = 0; i < words.length - 1; i++) {
        // check the adjacent words
        if (words[i] === words[i + 1]) {
            return i;
        }
    }

    // if we do not find any single match for adjacent equal words
    return -1;
}

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.top];
        } else {
            return 'Stack is Empty';
        }
    }

    isEmpty() {
        return this.top === -1;
    }
}

inp.on("close", () => {
    // let words = userInput[0].split(' ');

    // while (true) {
    //     let index = findAdjacent(words);

    //     if (index === -1) {
    //         break;
    //     }

    //     words.splice(index, 2);
    // }

    // if (words.length > 0) {
    //     console.log(words.join(' '));
    // } else {
    //     console.log(-1);
    // }

    let words = userInput[0].split(' ');

    // create an empty stack
    let stack = new Stack();

    // traverse the words array
    for (let i = 0; i < words.length; i++) {
        if (stack.isEmpty()) {
            stack.push(words[i]);
        } else {
            // stack is not empty
            // check if the current word is equal to the top of the stack
            if (words[i] === stack.peek()) {
                stack.pop();
            } else {
                stack.push(words[i]);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});