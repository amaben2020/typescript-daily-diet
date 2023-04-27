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

  //Views first item i.e last element added to call stack
  peek() {
    console.log("peek", this.items[this.count - 1]);
    return this.items[this.count - 1];
  }

  //Returns boolean if there's an item in stack
  isEmpty() {
    if (this.count == 0) {
      return "Stack is empty";
    } else {
      return "Stack is not empty";
    }
  }

  // Returns number of items in call stack
  size() {
    return this.count;
  }

  // Print elements in stack

  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      console.log("count", this.count);
      str += this.items[i] + " ";
    }

    return str;
  }

  // deletes all items from stack
  clear() {
    this.count = 0;
    this.items = [];
    console.log("Stack cleared");
    return this.items;
  }
}

const stack1 = new Stack1();

stack1.push(300);
stack1.push(400);
// console.log(stack1.push(400));

// stack1.pop();
// stack1.peek();

console.log(stack1.isEmpty());
console.log(stack1.size());
console.log(stack1.print());
console.log(stack1.clear());
