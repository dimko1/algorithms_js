require('./../../utils/array.utils');



var merge_sort = function(array){      
    function merge(a, aux, lo, mid, hi ){
        var result = [];
        var il = 0;
        var ir = 0;
        
        for (var k = lo; k <= hi; k++){
            aux[k] = a[k];
        }
        debugger;
        var i = lo;
        var j = mid + 1;
        for (var k = lo; k <= hi; k++){
            if ( i > mid) a[k] = aux[j++];
            else if ( j > hi ) a[k] = aux[i++];
            else if ( aux[j] < aux[i]) a[k] = aux[j++];
            else a[k] = aux[i++];
        }
    }

    function sort(array, aux, lo, hi){
        if (hi <= lo) return;
        var mid = Math.floor(lo + (hi - lo) / 2);
        
        sort(array, aux, lo, mid);
        sort(array, aux, mid + 1, hi);
        
        merge(array, aux, lo, mid, hi);
    }

    function merge_sort(array){
        var aux = array.slice(0);
        sort(array, aux, 0, array.length - 1);
        return array;
    }

    return merge_sort(array);
     
};

module.exports = merge_sort;


