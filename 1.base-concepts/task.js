"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;

  if (discriminant < 0) return arr;
  else if (discriminant == 0) return arr.push((-b) / (2 * a));
  else {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
    return arr;
  } 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let loanBody = amount - contribution;

  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));
  let totalPayment = contribution + (monthlyPayment * countMonths);
  let roundedTotalPayment = totalPayment.toFixed(2);

  return parseFloat(roundedTotalPayment);
}