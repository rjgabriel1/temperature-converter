const UNITS = {
  celcius: "°C",
  fahrenheit: "°F",
};

function convertTemperature(temp, unit) {
  if (unit === UNITS.celcius) {
    return (temp - 32) / 1.8;
  } else if (unit === UNITS.fahrenheit) {
    return temp * 1.8 + 32;
  } else {
    throw new Error("Invalid unit.");
  }
}

function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}
function isIced(temp, unit) {
  if (unit === UNITS.celcius) {
    return temp <= 0;
  } else if (unit === UNITS.fahrenheit) {
    return temp <= 32;
  } else {
    throw new Error("Invalid Unit");
    
  }
}

export { UNITS, convertTemperature, getOppositeUnit ,isIced};
