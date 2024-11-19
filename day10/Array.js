class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Array {
    constructor() {
        this.head = null;
    }

    print() {
        const nodes = [];

        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    push(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let thead = this.head;

            while (thead.next != null) {
                thead = thead.next;
            }

            thead.next = newNode;
        }
    }

    pop() {
        let thead = this.head;

        if (thead != null) {
            if (thead.next == null) {
                this.head = null;
            } else {
                while (thead.next.next != null) {
                    thead = thead.next;
                }

                thead.next = null;
            }
        }
    }

    unshift(data) {
        let newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
    }

    forEach(cb) {
        let thead = this.head;
        while (thead != null) {
            cb(thead.data);
            thead = thead.next;
        }
    }

    map(cb) {
        let thead = this.head;

        let array = [];

        while (thead != null) {
            array.push(cb(thead.data));
            thead = thead.next;
        }

        return array;
    }
}

module.exports = Array;