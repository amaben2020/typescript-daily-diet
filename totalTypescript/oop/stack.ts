//LIFO

class Stack1 {
  items: number[];
  count: number;
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Pushes item to the top of stack
  push(element: number) {
    this.items[this.count] = element;

    console.log(`${this.items[this.count]} position ${this.count}`);
    this.count += 1;

    return this.count - 1;
  }

  // Removes last item from stack using LIFO principle
  pop() {
    if (this.count == 0) return undefined;

    const deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  //Views first item
  peek() {}

  //Returns boolean if there's an item in stack
  isEmpty() {}

  // Returns number of items in call stack
  size() {}

  // Print elements in stack

  print() {}

  // deletes all items from stack
  clear() {}
}

const stack1 = new Stack1();

stack1.push(300);
stack1.push(400);
console.log(stack1.push(400));

stack1.pop();
