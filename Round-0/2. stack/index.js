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

  isEmpty() {
    return this.data.length ? false : true;
  }
}

module.exports = Stack;
