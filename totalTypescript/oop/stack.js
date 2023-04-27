// LIFO: Last in, first out

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to top of stack
  push(element) {
    this.items[this.count] = element;

    console.log(`${element} added to position ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  //Return and remove top element in stack
  //Return undefined if stack is empty
  pop() {
    if (this.count == 0) return undefined;

    let deleteItem = this.items[this.count - 1];

    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  //Check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]} `);
    return this.items[this.count - 1];
  }

  //Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "Empty" : "Stack is not empty");
    return this.count == 0;
  }

  size() {
    return this.count;
  }

  // Print elements in stack

  print() {
    let str = "";

    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + "";
    }

    return str;
  }

  // Clear stack

  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared");
    return this.items;
  }
}

//[200, 300, 400]

const stack = new Stack();

// stack.isEmpty();
// stack.push(200);
// stack.push(300);

// stack.peek();
// stack.push(400);

// stack.pop();

// stack.print();
// console.log(stack.print());

// stack.clear();
