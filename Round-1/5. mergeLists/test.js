const sortedMergeLists = require("./index");
const L = require("./linkedlist");
const Node = L.Node;
const LinkedList = L.LinkedList;

test("sortedMergeLists is a function", () => {
  expect(typeof sortedMergeLists).toEqual("function");
});

describe("sortedMergeLists returns sorted merged list of 2 sorted lists", () => {
  test("when 2 lists are passed", () => {
    const list_1 = new LinkedList();
    const list_2 = new LinkedList();

    list_1.insertLast(10);
    list_1.insertLast(20);
    list_1.insertLast(30);

    list_2.insertLast(3);
    list_2.insertLast(4);
    list_2.insertLast(50);

    expect(sortedMergeLists(list_1.head, list_2.head)).toEqual(
      expect.objectContaining({
        data: 3,
        next: {
          data: 4,
          next: {
            data: 10,
            next: {
              data: 20,
              next: { data: 30, next: { data: 50, next: null } },
            },
          },
        },
      })
    );
  });
});
