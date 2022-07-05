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
  let first = list;
  let second = list;

  while (second.next && second.next.next) {
    first = first.next;
    second = second.next.next;

    if (first == second) {
      return true;
    }
  }
  return false;
};

const list = new LinkedList();
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
list.head = a;
a.next = b;
b.next = c;
c.next = a;
console.log(circular(list.head));

module.exports = circular;
