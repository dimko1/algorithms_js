require('./../../utils/array.utils');
var sort_algs = require('./sleep_sort');

var array = [];
array.generate_numbers(100);
//soring 100 elements
console.time('100elements');
sort_algs(array, function(array){
	console.log(array);
	console.timeEnd('100elements');
});



