/** 
--- Directions
      - Given a linked list
      - Return true if the list is circular, false if it is not.
--- Examples
      -  const list = new List();
      -  const a = new Node("a");
      -  const b = new Node("b");
      -  const c = new Node("c");
      -  list.head = a;
      -  a.next = b;
      -  b.next = c;
      -  c.next = b;
      -  circular(list); --> true
*/

const { LinkedList } = require("./linkedlist");
const { Node } = require("./linkedlist");

const circular = (list) => {
  let first = list.getLast();
  while (first) {
    list.insertLast(0);
  }

  if (first) {
    return true;
  } else false;
};

const list = new LinkedList();
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
list.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(list));

module.exports = circular;
