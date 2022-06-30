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
  // TODO: your code here
};

module.exports = sortedMergeLists;
