// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const LEVEL_END = Symbol('Level End');
function levelWidth(root) {
  const nodeCounter = [0];
  const nodes = [root, LEVEL_END];

  while(nodes.length > 1) {
    const node = nodes.shift()

    if (node === LEVEL_END) {
      nodes.push(node);
      nodeCounter.push(0);
    } else {
      nodes.push(...node.children);
      nodeCounter[nodeCounter.length - 1] += 1;
    }
  }

  return nodeCounter;
}

module.exports = levelWidth;
