
/**
 * current function is used to swap two elements in array
 * @param  {int} a index of the first element
 * @param  {int} b index of the second element
 */
Array.prototype.swap = function(a,b){
	var tmp = this[a];
	this[a] = this[b];
	this[b] = tmp;
}

/**
 * current function is used to randomly generate numbers
 * @param  {int} amount - amount of items to henerate
 */
Array.prototype.generate_numbers = function(amount){
	for (var i = 0; i < amount; i++ ){
		this[i] = Math.floor(Math.random() * amount + 1);
	}
}

/**
 * current function is used to shuffle array using knuth shuffle algorithm
 */
Array.prototype.knuth_shuffle = function() {

	var random = 0;
	for (var i = 1; i < this.length; i++){
		var random = Math.floor(Math.random() * i);
		this.swap(i, random); 
	}
};

/**
 * function validates array if it is sorted
 */
Array.prototype.validate_sorted = function(){
	for (var i = 0; i < this.length - 1; i++){
		if (this[i] > this[i+1])
			return false;
	}

	return true;
};