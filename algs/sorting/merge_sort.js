require('./../../utils/array.utils');



var merge_sort = function(array){      
    function merge(left, right){
        var result = [];
        var il = 0;
        var ir = 0;
        
        while (il < left.length && ir < right.length){
          if (left[il] < right[ir]){
            result.push(left[il++]);
          } else {
            result.push(right[ir++]);
          }
        }
        
        if ( il < left.length){
            result.push.apply(result,left.slice(il));
        } 

        if (ir < right.length){
            result.push.apply(result,right.slice(ir));
        }
        
        return result;
    }

    function merge_sort(items){
        //well it is only 1 element
        if (items.length < 2){
            return items;
        }

        var middle = Math.floor(items.length / 2);

        //create two arrays
        var left = items.slice(0, middle);
        var right = items.slice(middle);

        return merge(merge_sort(left), merge_sort(right));
    }

    return merge_sort(array);
     
};

module.exports = merge_sort;


