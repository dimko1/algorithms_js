require('./../../utils/array.utils');



var heap_sort = function(array){
	
	/**
	 * deeps down to the children, and check if children is less then parent
	 */
	function sink(array, i, max){
	
		var big_index, child;
    	
    	while( i < max ) {
	        big_index = i;
	        childl = 2 * i + 1;
	       	childr = childl + 1;

	        if (childl < max && array[childl] > array[big_index])
	            big_index = childl;
	        
	        if (childr < max && array[childr] > array[big_index])
	            big_index = childr;
	        
	        if (big_index == i) return;
	        

	        array.swap(i, big_index);
	        i = big_index;
	    }
	}

	/**
	 * build heap from the array
	 */
	function build_heap(array){
		var index = Math.floor((array.length / 2) - 1) ;

		while ( index >= 0 ){
			sink(array, index, array.length);
			index--;
		}
	}

	/**
	 * start soring
	 */
	function heapSort(array){
		build_heap(array);

		var end = array.length - 1;
	    
	    while(end >= 0) {
	        array.swap(0, end);
	        sink(array, 0, end);
	        end -= 1
	    }

	    return array;
	}

	return heapSort(array);
};

module.exports = heap_sort;