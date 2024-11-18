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

    toArray() {
        const nodes = [];

        while (list.head != null) {
            nodes.push(list.head.data);
            list.head = list.head.next;
        }

        return nodes;
    }
}

let list = new LinkedList();

list.head = new Node(3);
list.head.next = new Node(4);
list.head.next.next = new Node(5);
list.head.next.next.next = new Node(6);
list.head.next.next.next.next = new Node(7);

console.log(list.toArray());

/*
    list.head = Node {
        data: 3,
        next: Node {
            data: 4,
            next: Node {
                data: 5,
                next: Node {
                    data: 6,
                    next: null
                }
            }
        }
    }
    
    nodes = [3, 4, 5, 6]

    list.head = null
*/