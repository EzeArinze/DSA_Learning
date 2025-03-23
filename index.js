// today we're starting with stack data structure
// stack is a linear data structure which follows LIFO (Last In First Out) order
// stack can be implemented using array or linked list
// methods of statck are push,pop,peek,isEmpty,clear,size

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "There is no element to pop";
    }

    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Statck is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }

  clear() {
    return (this.items = []);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());
