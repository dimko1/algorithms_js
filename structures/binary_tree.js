/**
 * base node object
 */
Node = function(key, value){
	this.key = key;
	this.value = value;
	this.left = null;
	this.right = null;
	this.count = 0;
}

BinaryTree = function(){}

/**
 * reference to root node
 */
BinaryTree.prototype.root = null;

/**
 * adding node, public interface
 */
BinaryTree.prototype.addNode = function(key, value){
	this.root = putNode( this.root, key, value );
}

/**
 * node search
 */
BinaryTree.prototype.getNode = function(key){

	var currentNode = this.root;

	while (currentNode != null){
		if (currentNode.key > key) currentNode = currentNode.left;
		else if (currentNode.key < key) currentNode = currentNode.right;
		else if (currentNode.key == key ) return currentNode;
	}

	return null;
}

/**
 * get minimum node
 */
BinaryTree.prototype.getMinNode = function(){
	return getMin(this.root);
}

/**
 * returns max node
 */
BinaryTree.prototype.getMaxNode = function(){
	return getMax(this.root);
}

/**
 * delete minimum node
 */
BinaryTree.prototype.deleteMin = function(){
	deleteMin(this.root);
}

/**
 * finding max e<= key
 */
BinaryTree.prototype.floor = function(key){
	var n = getFloor(this.root, key);
	return n;
}

/**
 * finding min e >= key
 */
BinaryTree.prototype.ceil = function(key){
	var n = getCeil(this.root, key);
	return n;
}

/**
 * deletes the node
 */
BinaryTree.prototype.deleteNode = function(key){
  this.root = deleteNode(this.root, key);
}

/**
 * pre order traversing
 */
BinaryTree.prototype.preOrder = function() {
	preOrder(this.root);
}

/**
 * in order traversing
 */
BinaryTree.prototype.inOrder = function() {
	inOrder(this.root);
}

/**
 * post order traversing
 */
BinaryTree.prototype.postOrder = function() {
	postOrder(this.root);
}

/**
 * post order traversing
 */
BinaryTree.prototype.bfs = function() {
	return bfs(this.root);
}

function preOrder(node){
	if (node == null) return;
	console.log(node.value);
	preOrder(node.left);
	preOrder(node.right);
}

function inOrder(node){
	if (node == null) return;
	inOrder(node.left);
	console.log(node.value);
	inOrder(node.right);
}

function postOrder(node){
	if (node == null) return;
	postOrder(node.left);
	postOrder(node.right);
	console.log(node.value);
}

function bfs(node){
	var queue = [];
	var values = [];
	queue.push(node);

	while(queue.length > 0){
		var tempNode = queue.shift();
		values.push(tempNode.value);
		if (tempNode.left){
			queue.push(tempNode.left);
		}

		if (tempNode.right){
			queue.push(tempNode.right);
		}
	}

	return values;
}

/**
 * deletes node
 */
function deleteNode(node, key){
  if (!node) return null;
  if (node.key > key) node.left = deleteNode(node.left, key); 
  else if (node.key < key) node.right = deleteNode(node.right, key);
  else {
    if (!node.right) return node.left;
    if (!node.left) return node.right;
    var t = node;
    node = getMin(t.right);
    node.right = deleteMin(t.right);
    node.left = t.left;
 }
  node.count = 1 + getSize(node.left) + getSize(node.right);
  return node;
}

/**
 * recursive function used to delete minimal item in the tree
 * recuresively we are checking if node has left child. if no - return right child.
 * @param  {node} node object. 
 */
function deleteMin(node){
	if (node.left == null) return node.right;

	node.left = deleteMin(node.left);
	node.count = 1 + getSize(node.left) + getSize(node.right);

	return node;
}

/**
 * recursively search for node with minimum key
 */
function getMin(node){
	
	if (!node.left) return node;

	return getMin(node.left); 
}


/**
 * recursively search for node with maximum key
 */
function getMax(node){
	
	if (!node.right) return node;

	return getMax(node.right); 
}

/**
 * get floor element
 */
function getFloor(node, key){
	if ( node == null ) return null;

	if (node.key == key ) return node;

	if (node.key > key) return getFloor(node.left, key);

	var x = getFloor(node.right, key);

	if (x) return x;

	return node;
}

/**
 * get ceil element
 */
function getCeil(node, key){

	if ( node == null ) return null;

	if (node.key == key ) return node;

	if (node.key < key) return getCeil(node.right, key);

	var x = getCeil(node.left, key);

	if (x) return x;

	return node;
}


/**
 * adding node, by recursively finding it's place using key value
 */
function putNode(node, key, value){
	if ( !node ) return new Node(key, value);

	if (node.key > key ){
		node.left = putNode( node.left, key, value);
	} else if (node.key < key) {
		node.right = putNode(node.right, key, value);
	} else if (node.key == key){
		node.value = value;
	}

	node.count = 1 + getSize(node.left) + getSize(node.right);

	return node;
}

/**
 * gets node rank
 */
function getSize(node){
	if (!node) return 0;

	return node.count;
}

module.exports.BinaryTree = BinaryTree;


