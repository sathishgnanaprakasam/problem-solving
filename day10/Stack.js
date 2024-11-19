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

let stack = new Stack();



console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());