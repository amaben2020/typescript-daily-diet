//FIFO: first in first out

class Queue {
  maxSize: number;
  container: number[];
  constructor(maxSize: number) {
    // Set default max size if not provided
    if (isNaN(maxSize)) {
      maxSize = 10;
    }
    this.maxSize = maxSize;
    // Init an array that'll contain the queue values.
    this.container = [];
  }
  // Helper function to display all values while developing
  display() {
    console.log(this.container);
  }
  // Checks if queue is empty
  isEmpty() {
    return this.container.length === 0;
  }
  // checks if queue is full
  isFull() {
    return this.container.length >= this.maxSize;
  }

  // adds item to queue
  push(item: number) {
    return this.container.push(item);
  }
}

const queue = new Queue(10);

console.log(queue.display());
console.log(queue.push(2));
