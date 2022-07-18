/* 
--- Directions
        1) Implement the Node class to create
        a binary search tree.  The constructor
        should initialize values "data", "left",
        and "right".

        2) Create a BST(Binary search tree) class. The tree constructor
        should initialize a "root" property to null.
        
        3) Implement the "insert" method for the
        BST class.  Insert should accept an argument
        "data", then create an insert a new node
        at the appropriate location in the tree.

        4) Implement the "contains" method for the Bst
        class. Contains should accept a "data" argument
        and return true or false depend on the node exist or not. 
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    } else this.insertNewNode(node);

    let insertNewNode = (node) => {
      if (node.data > data) {
        if (!node.left) {
          return (node.left = newNode);
        }
        return insertNewNode(node.left);
      }
      if (node.data < data) {
        if (!node.right) {
          return (node.right = newNode);
        } else {
          insertNewNode(node.right);
        }
      }
    };
  }
}

const newBST = new BST();

newBST.insert(5);
newBST.insert(7);
newBST.insert(2);

module.exports = { Node, BST };
