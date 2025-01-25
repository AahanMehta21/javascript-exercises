const repeatString = function(name, count) {
    if (count < 0) return "ERROR";
    let returnString = "";
    for (let i = 0; i < count; i++) {
        returnString += name;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
