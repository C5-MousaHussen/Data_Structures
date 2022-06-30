/** 
--- Directions
      - Given a linked list
      - Return the linked list in the reversed order
--- Example
      -  const list = new LinkedList();
      -  list.insertLast("a")
      -  list.insertLast("b")
      -  list.insertLast("c")
      -  reverseLinkedList(list.head); 
         Node {data: 'c', next: Node { data: 'b', next: Node { data: 'a', next: null } }
}
*/

const { LinkedList } = require("./linkedlist");

/*
1- loop => node
2- create new Linkedlist
3- insert first node
4- return linkedList
*/
const reverseLinkedList = (list) => {
  const newList = new LinkedList();

  let node = list.head;

  while (node) {
    newList.insertFirst(node.data);
    node = node.next;
  }
  return newList
};

reverseLinkedList();
module.exports = reverseLinkedList;
