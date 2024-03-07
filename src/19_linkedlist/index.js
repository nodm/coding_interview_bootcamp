// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);

    if (this.tail === null) {
      this.tail = this.head;
    }

    this.count += 1;
  }

  size() {
    let count = 0;
    let node = this.head;
    
    while(node) {
      count += 1;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  removeFirst() {
    if (this.head === null) return;

    if (this.head === this.tail) {
      this.clear();
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) return;

    if (this.head === this.tail) {
      this.clear();
      return;
    }

    let node = this.head;
    while(node.next !== this.tail) {
      node = node.next;
    }
    node.next = null;
    this.tail = node;
  }

  insertLast(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  getAt(n) {
    let index = 0;
    let node = this.head;

    while (index != n && index < this.size()) {
      index += 1;
      node = node.next;
    }

    return node;
  }

  removeAt(n) {
    if (n >= this.size()) return;

    if (n === 0) {
      this.head = this.head.next;

      if (this.head.next === null) {
        this.tail = null;
      }
    } else {
      const previousNode = this.getAt(n - 1);
      previousNode.next = previousNode.next.next;

      if (previousNode.next === null) {
        this.tail = previousNode;
      }
    }
  }

  insertAt(data, n) {
    if (n === 0) {
      this.insertFirst(data);
      return;
    }

    if (n >= this.size()) {
      this.insertLast(data);
      return;
    }

    const previousNode = this.getAt(n - 1);
    const node = new Node(data, previousNode.next);
    previousNode.next = node;
  }

  forEach(fn) {
    let node = this.head;
    while (node !== null) {
      fn(node);
      node = node.next;
    }
  }

  // [Symbol.iterator]() {
  //   let node = this.head;
    
  //   return {
  //     next() {
  //       if (node === null) {
  //         return { value: undefined, done: true };
  //       }

  //       const value = node;
  //       node = node.next;

  //       return { value, done: false }
  //     }
  //   };
  // }

  *[Symbol.iterator]() {
    let node = this.head;
    
    while (node !== null) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
