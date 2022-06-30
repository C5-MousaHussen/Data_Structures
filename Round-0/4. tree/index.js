/** 
--- Directions
    1) Create a node class.  The constructor
    should accept an argument that gets assigned
    to the data property and initialize an
    empty array for storing children. The node
    class should have methods "add" and "remove".

    2) Create a tree class. The tree constructor
    should initialize a "root" property to null.

    3) Implement "traverseBF" and "traverseDF"
    on the tree class.  Each method should accept a
    function that gets called with each element in the tree
*/

class Node {
  constructor(data, next) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children.filter((node, i) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor(node=null) {
    this.root = null;
  }

  // fn --> function parameter
  traverseBF(fn) {
    // we need a start point --> root
    const tempArray = [this.root];
    //stop point
    while (tempArray.length) {
      //removve the current node
      const node = tempArray.shift();

      tempArray.push(...node.children);
      fn(node)
    }
  }

  traverseDF(fn){
     // we need a start point --> root
     const tempArray = [this.root];
     //stop point
     while (tempArray.length) {
       //removve the current node
       const node = tempArray.shift();
 
       tempArray.unshift(...node.children);
       fn(node)
     }
  }
}

const node = new Node();

node.add("mosa");
//node.remove("mosa");
console.log(node);
module.exports = { Tree, Node };
