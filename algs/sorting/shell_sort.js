require('./../../utils/array.utils');

var shell_sort = function(array){
	var length = array.length;
	var h = 1;
	while( h < length / 3){
		h = 3 * h + 1;
	}

	while( h > 0 ){
		for ( var i = h; i < length; i++){

			for ( var j = i; j > 0 && array[j] < array[j-h]; j-=h){
				array.swap(j, j-h);
			}
		}
		//decreasing h
		h = --h / 3

	}
	return array;
};

module.exports = shell_sort;