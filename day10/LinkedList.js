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
}

let list = new LinkedList();

list.insertAtTail(4);
list.insertAtTail(7);
list.insertAtTail(9);
list.insertAtTail(11);
list.insertAtTail(12);
list.insertAtHead(3);
list.insertAtHead(2);

list.deleteHead();
list.deleteHead();

console.log(list.toArray());
// console.log(list.length());


/*
    newNode = 

    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: Node {
                    data: 7,
                    next: Node {
                        data: 9,
                        next: Node {
                            data: 11,
                            next: Node {
                                data: 12,
                                next: null
                            }
                        }
                    }
                }   
            }
        }
    }
    
    list = LinkedList {
        head: Node {
            data: 4,
            next: Node {
                data: 7,
                next: Node {
                    data: 9,
                    next: Node {
                        data: 11,
                        next: Node {
                            data: 12,
                            next: null
                        }
                    }
                }
            }   
        }
    }
    
    thead = LinkedList {
        head: Node {
                            data: 12,
                            next: null
                        }
    }
*/