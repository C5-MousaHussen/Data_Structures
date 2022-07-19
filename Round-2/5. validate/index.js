/*
--- Directions
        Given a node, validate the binary search tree,
        ensuring that every node's left hand child is
        less than the parent node's value, and that
        every node's right hand child is greater than
        the parent
 */
const Node = require("./node.js");

const validate = (node, min = null, max = null) => {
  if (node == null) return true;

  if (node.data < min || node.data > max) return false;

  return (
    validate(node.left, min, node.data - 1) &&
    validate(node.right, node.data + 1, max)
  );
};

root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

console.log(validate(root));

module.exports = validate;
