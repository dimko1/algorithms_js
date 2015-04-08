require('./../../utils/array.utils');



var quick_sort = function(array){      
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

    function sort(array, lo, hi){
        if (hi <= lo) return;

        var j = partition(array, lo, hi);

        sort(array, lo, j-1);
        sort(array, j+1, hi);
    }

    function findNth(array, lo, hi, index){
        if (hi <= lo) return;

        var j = partition(array, lo, hi);

        if (j == index) return array[j];

        if ( j > index) {
            return findNth(array, j, hi, index);
        } 

        if ( j < index ){
            return findNth(array, lo, j, index);
        }

        return -1;
    }


    sort(array, 0, array.length - 1);
    
    return array;
}

module.exports = quick_sort;


