const { Node } = require("./index");
const { BST } = require("./index");

test("Node is a constructor", () => {
  expect(typeof Node.prototype.constructor).toEqual("function");
});

test("Node can insert correctly", () => {
  const t = new BST();
  t.root = new Node(10);
  t.insert(5);
  t.insert(15);
  t.insert(17);
  expect(t.root.left.data).toEqual(5);
  expect(t.root.right.data).toEqual(15);
  expect(t.root.right.right.data).toEqual(17);
});

test("Contains returns node with the same data", () => {
  const t = new BST();
  t.insert(5);
  t.insert(15);
  t.insert(20);
  t.insert(0);
  t.insert(-5);
  t.insert(3);
  expect(t.contains(3)).toEqual(true);
});

test("Contains returns null if value not found", () => {
  const t = new BST();
  t.insert(5);
  t.insert(15);
  t.insert(20);
  t.insert(0);
  t.insert(-5);
  t.insert(3);
  expect(t.contains(9999)).toEqual(false);
});
