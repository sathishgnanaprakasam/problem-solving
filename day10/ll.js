// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // toArray method
    // to convert the linked list into an array
    toArray() {
        // create an empty array called nodes
        const nodes = [];
        let thead = this.head;

        while (thead !== null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    insertAtTail(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            // check if the linked list is empty
            this.head = newNode;
        } else {
            let thead = this.head;

            // move the thead to the tail node
            while (thead.next !== null) {
                thead = thead.next;
            }

            thead.next = newNode;
        }
    }

    // return the length of the linked list
    length() {
        // return this.toArray().length;
        // create an empty array called nodes
        let nodes = 0;
        let thead = this.head;

        while (thead !== null) {
            nodes++;
            thead = thead.next;
        }

        return nodes;
    }

    insertAtHead(data) {
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    deleteHead() {
        this.head = this.head.next;
    }

    deleteTail() {
        if (this.head !== null) {
            if (this.head.next != null) {
                let thead = this.head;

                while (thead.next.next !== null) {
                    thead = thead.next;
                }

                thead.next = null;
            } else {
                // the list has only one node
                this.head = null;
            }
        }
    }

    removeLastOccurence(key) {
        let index = -1;
        let pos = 1;

        // iterate the linked list
        let thead = this.head;

        while (thead != null) {
            if (thead.data === key) {
                index = pos;
            }
            thead = thead.next;
            pos++;
        }

        if (index === 1) {
            this.deleteHead();
        } else if (index === this.length()) {
            this.deleteTail();
        } else {
            let thead = this.head;

            // move the thead to index - 2 positions
            let times = index - 2;
            while (times--) {
                thead = thead.next;
            }

            thead.next = thead.next.next;
        }
    }
}

inp.on("close", () => {
    let length = Number(userInput[0]);
    let numbers = userInput[1].split(' ').map(num => Number(num));
    let key = Number(userInput[2]);

    // Prepare the linked list
    let list = new LinkedList();

    // traverse the input array numbers
    for (let i = 0; i < numbers.length; i++) {
        // take each element from the array and push it to the list
        list.insertAtTail(numbers[i]);
    }

    list.removeLastOccurence(key);

    console.log(list.toArray().join(' '));
});