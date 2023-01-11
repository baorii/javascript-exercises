const repeatString = function(text, num) {
    let total="";
    if (num <= 0) {
        total += "ERROR";
    }

    for (num>0; num--;) {
        total += text
    }

    return total
};

// Do not edit below this line
module.exports = repeatString;
