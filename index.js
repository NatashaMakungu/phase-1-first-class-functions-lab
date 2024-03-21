const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers); 

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const lastTwoDrivers = returnFirstTwoDrivers(driversArray);
console.log(lastTwoDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};
const fareQuadruple = createFareMultiplier(4);
console.log(fareQuadruple(10)); 

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10)); 

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10)); 

const selectDifferentDrivers = function(drivers, selectDriver) {
    return selectDriver(drivers);
};
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));