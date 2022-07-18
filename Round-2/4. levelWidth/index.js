/*
--- Directions
        Given the root node of a tree, return
        an array where each element is the width
        of the tree at each level.

--- Example

        Given:
           0
        /  |  \
        1  2   3
        |      |
        4      5

Answer: [1, 3, 2] 
*/

const Node = require("./node");

const levelWidth = (root) => {
  if (root == null) return 0;

  let maxwidth = 0;
  let arr = [];

  arr.push(root);

  while (arr.length > 0) {
    let counter = 0;

    maxwidth = Math.max(maxwidth, counter);

    while (counter-- > 0) {
      // Dequeue an node from queue
      let temp = arr.shift();

      // Enqueue left and right children
      // of dequeued node
      if (temp.left != null) {
        arr.push(temp.left);
      }
      if (temp.right != null) {
        arr.push(temp.right);
      }
    }
  }
  return maxwidth;
};

let root = new Node();

root.add(1)
root.add(2)
root.add(3)



console.log(levelWidth(2));

module.exports = levelWidth;
