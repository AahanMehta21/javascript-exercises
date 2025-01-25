const reverseString = function(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
