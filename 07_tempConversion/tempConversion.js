const convertToCelsius = function(val) {
  fullVal = (val - 32) * (5 / 9);
  return Math.round(fullVal * 10) / 10;
};

const convertToFahrenheit = function(val) {
  fullVal = (val * 9) / 5 + 32;
  return Math.round(fullVal * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
