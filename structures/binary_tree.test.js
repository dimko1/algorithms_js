var BinaryTree = require('./binary_tree').BinaryTree;
require('./../utils/array.utils');

var array = [];
array.generate_numbers(100);

var binary_tree = new BinaryTree();

array.forEach(function(element){
	binary_tree.addNode(element, element);
});

console.log(binary_tree.getMaxNode().value);
console.log(binary_tree.getMinNode().value);

var binary_tree_traversals = new BinaryTree();
binary_tree_traversals.addNode('F', 'F');
binary_tree_traversals.addNode('B', 'B');
binary_tree_traversals.addNode('A', 'A');
binary_tree_traversals.addNode('D', 'D');
binary_tree_traversals.addNode('C', 'C');
binary_tree_traversals.addNode('E', 'E');
binary_tree_traversals.addNode('G', 'G');
binary_tree_traversals.addNode('I', 'I');
binary_tree_traversals.addNode('H', 'H');

console.log('---------PRE ORDER----------');
binary_tree_traversals.preOrder();

console.log('---------IN ORDER----------');
binary_tree_traversals.inOrder();

console.log('---------POST ORDER----------');
binary_tree_traversals.postOrder();

console.log('---------BFS----------');
console.log(binary_tree_traversals.bfs());