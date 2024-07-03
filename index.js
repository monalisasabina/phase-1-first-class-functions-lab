// Code your solution in this file!

const returnFirstTwoDrivers=function(){
   let drivers=['Antonia', 'Nuru', 'Amari', 'Mo']
   drivers.splice(-2);
   return drivers;
}


const returnLastTwoDrivers=function (){
  let drivers2=['Antonia', 'Nuru', 'Amari', 'Mo']
  let returnTwoDrivers=drivers2.splice(-2);
  return returnTwoDrivers;

}

// AN ARRAY CONTAINING TWO ELEMENTS
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]


// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and 
// returns a function that will multiply a fare for a ride accordingly. 

function createFareMultiplier(multiplier){
      return (function(fare){
      return multiplier * fare
     })
 }


//  fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke
 const fareDoubler= createFareMultiplier(2)
 

// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

const fareTripler=createFareMultiplier(3)

// selectDifferentDrivers() — This function takes two arguments, an array of the names of Scuber's drivers 
// and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
// Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

function selectDifferentDrivers(drivers,eitherDriver){
  return eitherDriver(drivers)
  }


