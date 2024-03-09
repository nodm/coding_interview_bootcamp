// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  children = [];

  constructor(data) {
    this.data = data;
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  /**
   * Tree traverse
   * @param {Function} fn 
   * @param {'BREADTH_FIRST' | 'DEPTH_FIRST'} type 
   */
  traverse(fn, type = 'BREADTH_FIRST') {
    const method = type === 'DEPTH_FIRST' ? 'unshift' : 'push';
    const nodes = [this.root];

    while(nodes.length) {
      const node = nodes.shift();
      fn(node);
      nodes[method](...node.children);
    }
  }

  traverseBF(fn) {
    this.traverse(fn);
  }
  
  traverseDF(fn) {
    this.traverse(fn, 'DEPTH_FIRST');
  }
}

module.exports = { Tree, Node };
