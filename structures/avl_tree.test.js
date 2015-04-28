var AVLTree = require('./avl_tree').AVLTree;
require('./../utils/array.utils');

var array = [10,9,8,7,6,5,4,3,2,1,0];
//array.generate_numbers(100);

var avl_tree = new AVLTree();

array.forEach(function(element){
	avl_tree.addNode(element, element);
});

avl_tree.print();

avl_tree.deleteNode(7);

avl_tree.print();


//console.log(binary_tree.getMaxNode().value);
//console.log(binary_tree.getMinNode().value);

