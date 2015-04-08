//solution shows how to solve tasks of type: find N'th symbol;

require('./../../utils/array.utils');



var number_finder = function(array, index){      
    function partition(array, lo, hi){
        var i = lo, j = hi + 1;

        while(true){
            while(array[++i] < array[lo]){
                if ( i == hi ) break;
            }

            while (array[--j] > array[lo]){
                if ( j == lo ) break;
            }

            if (i >= j) break;

            array.swap(i,j);
        }

        array.swap(lo,j);
        return j;
    }

    function findNth(array, lo, hi, index){
        if (hi <= lo && hi == index) {
            console.log(array);
            return array[hi];
               
        }

        var j = partition(array, lo, hi);
        console.log(j);
        if (j == index){
            if (!array[index]){
                console.log(array);
            }
            return array[index];
        } 

        if ( j < index) {
            return findNth(array, j + 1, hi, index);
        } 

        if ( j > index ){
            return findNth(array, lo, j - 1, index);
        }

        return -1;
    }

    return findNth(array, 0, array.length-1, index - 1);
}

module.exports = number_finder;


