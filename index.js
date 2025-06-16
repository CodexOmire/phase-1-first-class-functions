// index.js

// 1. returnFirstTwoDrivers — gets the first two names from a list
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers — gets the last two names from a list
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2);
};

// 3. selectingDrivers — list with the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier — makes a new function to multiply fare
function createFareMultiplier(number) {
  return function(fare) {
    return fare * number;
  };
}

// 5. fareDoubler — doubles the fare
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler — triples the fare
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers — uses a function to get either the first or last drivers
function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}

// Make functions available for tests
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};
