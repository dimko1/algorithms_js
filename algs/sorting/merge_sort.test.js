require('./../../utils/array.utils');
var sort_algs = require('./merge_sort');

var array = [];
array.generate_numbers(100);
//soring 100 elements
console.time('100elements');
sort_algs(array);
console.timeEnd('100elements');

//sorting 1000 elements
array.generate_numbers(1000);
console.time('1000elements');
sort_algs(array);
console.timeEnd('1000elements');

//sorting 10000 elements
array.generate_numbers(10000);
console.time('10000elements');
sort_algs(array);
console.timeEnd('10000elements');

//sorting 100000 elements
array.generate_numbers(100000);
console.time('100000elements');
sort_algs(array);
console.timeEnd('100000elements');

//sorting 1000000 elements
array.generate_numbers(1000000);
console.time('1000000elements');
sort_algs(array);
console.timeEnd('1000000elements');

//sorting 10000000 elements
array.generate_numbers(10000000);
console.time('10000000elements');
sort_algs(array);
console.timeEnd('10000000elements');

