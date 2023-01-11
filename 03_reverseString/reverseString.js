const reverseString = function(text) {
    let total = "";
    len = text.length;
    for (i = len; i>=0; i--) {
        total += (String)(text.charAt(i));
    }
    return total;
};

// Do not edit below this line
module.exports = reverseString;
