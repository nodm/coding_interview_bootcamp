// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(data) {
    const position = data < this.data ? 'left' : 'right';

    if (this[position] !== null) {
      return this[position].insert(data);      
    }
    
    this[position] = new Node(data);
  }

  contains(data) {
    if (this.data === data) return this;

    const position = data < this.data ? 'left' : 'right';

    if (this[position] === null) return null;

    return this[position].contains(data);
  }
}

module.exports = Node;
