require('./../../utils/array.utils');



var sleep_sort = function(array, callback){		
	var sorted = [];

	array.forEach(function(element){
	    setTimeout( 
	     function(){
	        sorted.push(element);
	    }, element);
	});

	setTimeout(function(){
		return callback(sorted);
	}, array.length);
};

module.exports = sleep_sort;