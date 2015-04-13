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

