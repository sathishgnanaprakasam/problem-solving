class Node {
    constructor(data) {
        this.previous = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
    }

    insertAtHead(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
    }
}

let dlist = new DoubleList();

dlist.insertAtHead(3);
dlist.insertAtHead(4);

console.log(dlist);