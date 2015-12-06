require('./../../utils/array.utils');



var sleep_sort = function(array, callback){		
	var sorted = [],
	    sortedTimeout = array.reduce(function(res,el){return res+el;},0);

	array.forEach(function(element){
	    setTimeout( 
	     function(){
	        sorted.push(element);
	    }, element);
	});

	setTimeout(function(){
		return callback(sorted);
	}, sortedTimeout);
};

module.exports = sleep_sort;
