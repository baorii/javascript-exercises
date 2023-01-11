const removeFromArray = function(array, num1, num2, num3, num4) {
    let len = array.length;
    let newArray = [];
    let j = 0;
    for (i=0;i<len;i++) {
        if (array[i] !== num1) {
            if(array[i] != num2) {
                if(array[i] != num3) {
                    if(array[i] != num4) {
                        newArray.push(array[i]);
                    }
                }
            }
        }    
        
    }
    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
