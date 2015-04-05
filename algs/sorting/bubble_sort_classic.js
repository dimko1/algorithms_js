require('./../../utils/array.utils');



var bubble_sort_classic = function(array){
	var length = array.length;
	var swapped;
	for (var i = 0; i < length; i++){
		swapped = false;
		for ( var j = 0; j < length - i - 1; j++){
			if (array[j] > array[j + 1] ){
				array.swap(j, j + 1);
				swapped = true;
			} 
		}

		if (!swapped){
			break;
		}
	}
	return array;
};

module.exports = bubble_sort_classic;