/* 
--- Description
 Create a stack data structure. The stack should be a class with methods:
    - push : stores an element in the stack
    - pop : removes the last entered element from the stack
    - peek : returns the top element
    - isEmpty: returns if stack is empty
    - size: returns the size of the stack

--- Examples
    const s = new Stack();
    s.push(2);   // stack is now [2]
    s.push(5);  // stack is now [2, 5]
    s.peek();  // returns 2
    s.pop();  //  stack is now [2] 
*/

class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    this.data.pop();
    return "deleted";
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length ? false : true;
  }
}

const stack = new Stack();

stack.push(5);
console.log(stack.isEmpty());

module.exports = Stack;
