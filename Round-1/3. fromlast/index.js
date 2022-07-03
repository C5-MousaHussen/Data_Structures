/** 
--- Directions
       - Given a linked list
       - Return the element n, start counting from the last node in the list -> last node will be counted as 0
       - Don't call the "size" method of the linked list
       - Assume that n will always be less than the length of the list
--- Examples
        const list = new List();
        list.insertLast("a");
        list.insertLast("b");
        list.insertLast("c");
        list.insertLast("d");
        fromLast(list, 1).data --> "c"
*/

const { LinkedList } = require("./linkedlist");

const fromLast = (list, n) => {
  let first = list;
  let second = list;
  let number = 0;

  while (second.next ) {
    first[n] =first[first.number]
  } 
  return first
};

const list = new LinkedList();
list.insertLast("a");
list.insertLast("b");
list.insertLast("c");
list.insertLast("d");
console.log(fromLast(list.head,1));
module.exports = fromLast;
