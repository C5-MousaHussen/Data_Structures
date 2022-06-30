const reverseLinkedList = require("./index");
const L = require("./linkedlist");
const Node = L.Node;
const LinkedList = L.LinkedList;

test("reverseLinkedList is a function", () => {
  expect(typeof reverseLinkedList).toEqual("function");
});

describe("reverseLinkedList returns the passed list in reverse order", () => {
  test("when the list has 3 elements", () => {
    const l = new LinkedList();
    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    expect(reverseLinkedList(l)).toEqual(
      expect.objectContaining({
        data: "c",
        next: { data: "b", next: { data: "a", next: null } },
      })
    );
  });

  test("when the list has 5 elements", () => {
    const l = new LinkedList();
    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    l.insertLast("d");
    l.insertLast("e");
    expect(reverseLinkedList(l)).toEqual(
      expect.objectContaining({
        data: "e",
        next: {
          data: "d",
          next: {
            data: "c",
            next: { data: "b", next: { data: "a", next: null } },
          },
        },
      })
    );
  });
});

describe("reverseLinkedList returns the middle node of an even numbered list", () => {
  test("when the list has 2 elements", () => {
    const l = new LinkedList();
    l.insertLast("a");
    l.insertLast("b");
    expect(reverseLinkedList(l)).toEqual(
      expect.objectContaining({ data: "b", next: { data: "a", next: null } })
    );
  });

  test("when the list has 4 elements", () => {
    const l = new LinkedList();
    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    l.insertLast("d");
    expect(reverseLinkedList(l)).toEqual(
      expect.objectContaining({
        data: "d",
        next: {
          data: "c",
          next: { data: "b", next: { data: "a", next: null } },
        },
      })
    );
  });
});
