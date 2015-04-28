/**
 * base node object
 */
Node = function(key, value){
	this.key = key;
	this.value = value;
	this.left = null;
	this.right = null;
	this.height = 0;
}

AVLTree = function(){}

/**
 * reference to root node
 */
AVLTree.prototype.root = null;

/**
 * adding node, public interface
 */
AVLTree.prototype.addNode = function(key, value){
	this.root = putNode( this.root, key, value );
}

/**
 * recursively deletes the node
 */
AVLTree.prototype.deleteNode = function(key){
  this.root = deleteNode(this.root, key);
}

/**
 * simple print function
 */
AVLTree.prototype.print = function(){
	console.log(JSON.stringify(this.root));
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

	node.height = 1 + getSize(node.left) + getSize(node.right);

	return balance(node);
}


/**
 * corrects height of the node, in case left subtree height and right subtree heigth 
 * is correct
 */
function correctHeight(node){
	var heightLeft = getSize(node.left);
	var heightRight = getSize(node.right);


	node.height = ( (heightLeft > heightRight) ? heightLeft : heightRight) + 1; 
}

/**
 * returns balance factor of the node
 */
function bfactor(node){
	return getSize(node.right) - getSize(node.left);
}

/**
 * function used to balance node
 */
function balance(node){
	correctHeight(node);
	if (bfactor(node) == 2){

		if (bfactor(node.right) < 0){
			node.right = rotateRight(node.right);
		}

		return rotateLeft(node);
	}

	if (bfactor(node) == -2){
		if (bfactor(node.left) > 0){
			node.left = rotateLeft(node.left);
		}

		return rotateRight(node);
	}

	return node;
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

    return balance(node);
  }

  return balance(node);
  
}

/**
 * recursive function used to delete minimal item in the tree
 * recuresively we are checking if node has left child. if no - return right child.
 * @param  {node} node object. 
 */
function deleteMin(node){
	if (node.left == null) return node.right;

	node.left = deleteMin(node.left);
	node.height = 1 + getSize(node.left) + getSize(node.right);

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
 * perform rotation around specific node
 */
function rotateRight(node){
	var tempNode = node.left;
	node.left = tempNode.right;
	tempNode.right = node;

	correctHeight(node);
	correctHeight(tempNode);

	return tempNode;
}

/**
 * perform rotation left around specific node
 */
function rotateLeft(node){
	var tempNode = node.right;
	tempNode.right = node.left;
	node.left = node;

	correctHeight(node);
	correctHeight(tempNode);

	return node;
}


/**
 * gets node rank
 */
function getSize(node){
	if (!node) return 0;

	return node.height;
}

module.exports.AVLTree = AVLTree;


