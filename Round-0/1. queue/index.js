/* 
--- Description
 Create a queue data structure. The queue should be a class with methods:
    - enqueue: stores an element in the queue
    - dequeue: removes the first entered element from the queue
    - rear: returns last item
    - front: returns first item
    - size: returns the size of the queue


--- Examples
    const q = new Queue();
    q.enqueue(1);  // queue is now [1]
    q.enqueue(5); // queue is now [1, 5]
    q.dequeue(); // queue is now [5]
*/
class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    return this.data.unshift(value);
  }
  dequeue() {
    this.data.shift();
    return "removed";
  }
  front() {
    return this.data[0];
  }
  rear() {
    return this.data.length - 1;
  }
  size() {
    return this.data.length;
  }
}

const queue = new Queue();

queue.enqueue(5, 1);

console.log(queue.dequeue());

module.exports = Queue;
