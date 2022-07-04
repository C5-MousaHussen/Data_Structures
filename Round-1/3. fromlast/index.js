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
  let fastNode = list.getFirst(); // هواخترنا هاذ الفنكشن حتى نحصل على الهيد
  let slowNode = list.getFirst();
  let step = 0; // هاذ حل الستيب نعملو كاونتر بنقدر نستغني عنو بحل ثاني

  /*   while (step < n) {
    step++;
    fastNode.next;
  }  رح استعمل حل ثاني*/

  while (n > 0) {
    fastNode = fastNode.next;
    n--;
  }

  while (fastNode.next) {
    fastNode.next;
    slowNode = slowNode.next;
  }
  return slowNode;
};

const list = new LinkedList();
list.insertLast("a");
list.insertLast("b");
list.insertLast("c");
list.insertLast("d");
console.log(fromLast(list, 1));
module.exports = fromLast;
