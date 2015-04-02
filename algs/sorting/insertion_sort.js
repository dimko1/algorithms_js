require('./../../utils/array.utils');



var insertion_sort = function(array){
	var length = array.length;

	for (var i = 0; i < length; i++){

		for ( var j = i; j > 0; j--){
			if (array[j] < array[j-1] ){
				array.swap(j, j-1);
			} else {
				break;
			}
		}
	}
	return array;
};

module.exports = insertion_sort;