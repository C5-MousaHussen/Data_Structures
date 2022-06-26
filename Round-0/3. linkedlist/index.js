// --- Directions
// Implement classes Node and Linked Lists
// See "directions" document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  size() {
    let count = 0;
    while (this.head != null) {
      count++;
      /* console.log(this.head) */ this.head = this.head.next;
    }
    return count;
  }

  getFirst() {
    return this.head.data;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;

    while (node) {
      if (!node.next) {
        return node.data;
      }
      node = node.next;
    }
  }

  clear() {
    if (this.head) {
      return (this.head = null);
    }
  }

  removeFirst() {
    return (this.head = this.head.next);
  }

  removeLast() {
    if (this.head == null) {
      return null;
    }
    if (this.head.next == null) {
      return null;
    }

    let secondLast = this.head;
    // console.log(secondLast);
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;

      secondLast.next = null;
      return this.head;
    }
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      while (this.head.next != null) {
        this.head = this.head.next;
      }
      this.head.next = new Node(data);
    }
  }

  getAt(at) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === at) {
        return currentNode;
      }

      count++;
      currentNode = currentNode.next;
    }

    return -1;
  }

  removeAt(at) {
    /*   let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === at) {
        // console.log(currentNode);
        return (currentNode = null);
      }
      count++;
      currentNode = currentNode.next;
    }
    return null; */

    if (!this.head) {
      return;
    }
    if (at == 0) {
      this.head = this.head.next;
      return;
    }

    const pre = this.getAt(at - 1);
    if (!pre || !pre.next) {
      return;
    }
    pre.next = pre.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      return (this.head = new Node(data));
    }

    if (index == 0) {
      return (this.head = new Node(data, this.head));
    }

    const pre = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, pre.next);

    pre.next = node;
  }

  forEach(){
    
  }
}
const a = new LinkedList();
a.insertFirst("mosa");
a.insertFirst("hushki");
a.insertFirst("reda");
a.insertFirst("reda");
a.insertLast("meraki");

a.insertAt("Hellooo", 1);

// a.removeAt(1);
/* a.clear() */
// a.removeFirst();
// a.removeLast();
console.log(a.getAt(1));
module.exports = { Node, LinkedList };
