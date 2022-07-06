/** 
--- Directions
      - Given two sorted linked lists ( increasing order )
      - Return a sorted merged linked list from the passed lists
      - The new list should be made by splicing together the nodes of the first two lists
--- Examples
      - const list_1 = new List();
      - const list_2 = new List();
      - list_1.insertLast(1)
      - list_1.insertLast(2)
      - list_2.insertLast(3)
      - sortedMergeLists(list_1, list_2);
        Node {data: '1', next: Node { data: '2', next: Node { data: '3', next: null } } 
*/

const { LinkedList } = require("./linkedlist");

const sortedMergeLists = (list_1, list_2) => {
  /*  const mergeList = new LinkedList();

  mergeList.insertFirst(list_1.head);

  if (mergeList) {
    mergeList.insertLast(list_2.head);
  }

  return mergeList.head; */

  let L1 = list_1.head;
  let L2 = list_2.head;

  let newLinked = new LinkedList();

  newLinked.insertFirst(null);
  let L3 = newLinked.head;

  while (L1 && L2) {
    if (L1.data > L2.data) {
      L3.next = L2;
      L2 = L2.next;
    } else {
      L3.next = L1;
      L1 = L1.next;
    }
    L3 = L3.next;
  }
  if (L1 == null) {
    L3.next = L2;
  }
  if (L2 == null) {
    L3.next = L1;
  }
  return newLinked.head.next;
};

const list_1 = new LinkedList();
const list_2 = new LinkedList();

list_1.insertLast(2);
list_2.insertLast(3);
list_1.insertLast(1);

console.log(sortedMergeLists(list_1, list_2));

module.exports = sortedMergeLists;
