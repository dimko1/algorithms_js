var BinaryHeap = require('./binary_heap').BinaryHeap;

var array = [];
array.generate_numbers(100);

var binary_heap = new BinaryHeap();

array.forEach(function(element){
	binary_heap.insert(element);
});

binary_heap.print();


