const leapYears = function(num) {
    if (!Number.isInteger(num)) return "ERROR";
    if (num % 4 == 0) {
        if (num % 100 == 0) {
            return num % 400 == 0;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
